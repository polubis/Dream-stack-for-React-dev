import {
  Box,
  Button,
  CloseIcon,
  Font,
  Popover,
  StatusIcon,
} from '@system/figa-ui';
import { useToggle } from '@system/figa-hooks';
import { article_store_selectors } from '../../store/article';
import { article_management_store_actions } from '../../store/article-management';
import { change_article_status_store_selectors } from '../../store/change-article-status';

const Trigger = () => {
  const { toggle } = Popover.use();

  return (
    <Popover.Trigger>
      <Button size={2} shape="rounded" title="Status" onClick={toggle}>
        <StatusIcon />
      </Button>
    </Popover.Trigger>
  );
};

const Content = () => {
  const { close } = Popover.use();

  const article = article_store_selectors.useArticle();
  const confirmation = useToggle();
  const is = change_article_status_store_selectors.useIs();

  const handleConfirm = (): void => {
    if (confirmation.closed) {
      confirmation.toggle();
      return;
    }

    article_management_store_actions.sendForApproval(article.id);
  };

  return (
    <Popover.Content
      padding={[250, 250, 250, 250]}
      variant="outlined"
      spacing={[250, 200, 400]}
      minWidth="280px"
      maxWidth="600px"
    >
      <Box orientation="row" between spacing={[250]}>
        <Font variant="h6">Send for approval</Font>
        <Button
          size={1}
          shape="rounded"
          variant="outlined"
          motive="tertiary"
          onClick={close}
        >
          <CloseIcon />
        </Button>
      </Box>
      <Box spacing={[250]}>
        <Font variant="b2">
          After this change, your article will go into{' '}
          <Font variant="b2" motive="primary" element="span">
            Review
          </Font>{' '}
          status. Our moderators will take care of its approval.
        </Font>
        <Button loading={is === 'busy'} size={2} onClick={handleConfirm}>
          {confirmation.opened ? 'Sure?' : 'Confirm'}
        </Button>
      </Box>
    </Popover.Content>
  );
};

const ArticleStatusPopover = () => {
  return (
    <Popover closeMode="backdrop">
      <Trigger />
      <Content />
    </Popover>
  );
};

export { ArticleStatusPopover };
