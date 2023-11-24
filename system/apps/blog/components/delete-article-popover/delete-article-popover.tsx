import {
  Box,
  Button,
  CloseIcon,
  Field,
  Font,
  Input,
  Popover,
  TrashIcon,
} from '@system/figa-ui';
import { article_selectors } from '../../store/article';
import { useToggle } from '@system/figa-hooks';
import { type FormEventHandler, useState, useEffect } from 'react';
import {
  delete_article_store_actions,
  delete_article_store_selectors,
} from '../../store/delete-article';
import { useRouter } from 'next/router';
import { useLang } from '../../dk';
import { auth_selectors } from '../../store/auth';

const Content = () => {
  const { close } = Popover.use();
  const { title, id } = article_selectors.useArticle();
  const confirm = useToggle();
  const [currentTitle, setCurrentTitle] = useState('');
  const { is } = delete_article_store_selectors.useState();

  const router = useRouter();
  const lang = useLang();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (confirm.closed) {
      confirm.open();
      return;
    }

    try {
      await delete_article_store_actions.delete(id);
      router.push(`/${lang}/your-articles`);
    } catch {
      confirm.close();
    }
  };

  const busy = is === 'busy';

  return (
    <Popover.Content
      padding={[250, 250, 250, 250]}
      variant="outlined"
      minWidth="280px"
      maxWidth="440px"
      spacing={[100, 100, 250]}
    >
      <Box orientation="row" between spacing={[250]}>
        <Font variant="h6">Are you sure you want to delete the article?</Font>
        <Button
          size={1}
          shape="rounded"
          variant="outlined"
          motive="tertiary"
          disabled={busy}
          onClick={close}
        >
          <CloseIcon />
        </Button>
      </Box>
      <Font variant="b1">
        This action is{' '}
        <Font element="strong" variant="b1" motive="primary" bold>
          irreversible
        </Font>
        . Ensure you are fully aware of the consequences before proceeding.
      </Font>
      <Font variant="b1">
        Type{' '}
        <Font element="strong" motive="primary" variant="b1">
          &quot;{title}&quot;
        </Font>{' '}
        title to confirm.
      </Font>
      <form onSubmit={handleSubmit}>
        <Box spacing={[300]}>
          <Field
            label="Article title*"
            error={
              is === 'fail' ? 'Something went wrong, try again.' : undefined
            }
          >
            <Input
              placeholder="Type article title to confirm..."
              onChange={(e) => setCurrentTitle(e.target.value)}
            />
          </Field>
          <Box orientation="row" spacing={[150]}>
            <Button
              loading={busy || is === 'ok'}
              type="submit"
              size={2}
              disabled={currentTitle !== title}
            >
              {confirm.opened ? 'Sure?' : 'Delete'}
            </Button>
            <Button
              type="button"
              variant="outlined"
              motive="tertiary"
              size={2}
              disabled={busy}
              onClick={close}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </form>
    </Popover.Content>
  );
};

const Trigger = () => {
  const { toggle } = Popover.use();

  return (
    <Popover.Trigger>
      <Button title="Delete article" shape="rounded" size={2} onClick={toggle}>
        <TrashIcon />
      </Button>
    </Popover.Trigger>
  );
};

const DeleteArticlePopover = () => {
  useEffect(() => {
    return () => {
      delete_article_store_actions.reset();
    };
  }, []);

  return (
    <Popover>
      <Trigger />
      <Content />
    </Popover>
  );
};

const ProtectedDeleteArticlePopover = () => {
  const { authorName } = article_selectors.useArticle();
  const isAuthor = auth_selectors.useIsAuthor(authorName);
  const isAdmin = auth_selectors.useIsAdmin();

  return isAdmin || isAuthor ? <DeleteArticlePopover /> : null;
};

export { ProtectedDeleteArticlePopover as DeleteArticlePopover };
