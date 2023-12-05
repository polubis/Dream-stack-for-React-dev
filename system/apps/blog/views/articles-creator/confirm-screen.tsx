import {
  Alert,
  Box,
  Button,
  Checkbox,
  Font,
  List,
  ListItem,
  Loader,
  useAlert,
} from '@system/figa-ui';
import {
  articles_creator_store_actions,
  useArticlesCreatorStore,
} from '../../store/articles-creator';
import { useAuthStore } from '../../store/auth';
import { useLang, useMoveToRedirect } from '../../dk';
import { useArticleStore } from '../../store/article';
import { useToggle } from '@system/figa-hooks';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ConfirmScreen = () => {
  const articleCreatorState = useArticlesCreatorStore();
  const articleStore = useArticleStore();
  const authStore = useAuthStore();
  const { go } = useMoveToRedirect();
  const confirmation = useToggle();
  const router = useRouter();
  const lang = useLang();
  const alert = useAlert();

  const handleClose = (): void => {
    articles_creator_store_actions.setView('creator');
  };

  const handleSubmit = (): void => {
    if (confirmation.closed) {
      confirmation.open();
      return;
    }

    if (authStore.is === 'authorized') {
      articles_creator_store_actions.confirm(
        new URLSearchParams(window.location.search).get('url')
      );
      confirmation.close();
      return;
    }

    go('/sign-in', '/articles-creator');
  };

  useEffect(() => {
    if (articleCreatorState.is === 'ok') {
      alert.show({
        children: `Article has been ${
          articleStore.is === 'idle' ? 'created' : 'edited'
        } ❤!`,
        type: 'ok',
      });

      router.push(
        `/${lang}/articles/preview?id=${articleCreatorState.data.id}&url=${articleCreatorState.data.url}`
      );

      articles_creator_store_actions.reset();
    }
  }, [articleCreatorState, lang, router, articleStore, alert]);

  const wantToChangePublishedArticle =
    articleStore.is === 'ok' && articleStore.article.status === 'Accepted';

  return (
    <>
      {articleCreatorState.is === 'busy' ? (
        <Box margin="auto">
          <Box margin="auto">
            <Loader size="big" />
          </Box>
        </Box>
      ) : (
        <Box
          padding={[250, 250, 250, 250]}
          maxWidth="400px"
          margin="auto"
          spacing={[
            wantToChangePublishedArticle ? 200 : 0,
            200,
            150,
            400,
            250,
            articleCreatorState.is === 'fail' ? 250 : 0,
          ]}
        >
          {wantToChangePublishedArticle && (
            <Alert type="warn">
              This article is currenty &quot;Published&quot;. By confirming
              edition you will change status to &quot;Draft&quot;.
            </Alert>
          )}

          <Font variant="h5">Do you want to submit an article for review?</Font>
          <Font variant="b1">What will happen now: </Font>
          <List ordered>
            <ListItem>Your article will be sent to review,</ListItem>
            <ListItem>
              Moderators will check its content and suggest corrections,
            </ListItem>
            <ListItem>
              Then you will have to introduce them - don&apos;t worry you will
              get an email notification,
            </ListItem>
            <ListItem>Then your article will be published.</ListItem>
          </List>
          <Box spacing={[150]}>
            <Checkbox
              label="Send to review"
              checked={articleCreatorState.form.values.sendToReview}
              onClick={() =>
                articles_creator_store_actions.change(
                  'sendToReview',
                  !articleCreatorState.form.values.sendToReview
                )
              }
            />
            {articleCreatorState.form.values.sendToReview && (
              <Font variant="b3">
                Your article will be saved and sent to review, our moderator or
                admin will pick it up. Later, an article will be published or
                changes will be requested.{' '}
              </Font>
            )}
          </Box>
          <Box orientation="row" spacing={[150]} right>
            <Button variant="outlined" motive="tertiary" onClick={handleClose}>
              Go back
            </Button>
            <Button onClick={handleSubmit}>
              {confirmation.opened ? 'Sure?' : 'Submit'}
            </Button>
          </Box>
          {articleCreatorState.is === 'fail' && (
            <Alert type="error">{articleCreatorState.error.message}</Alert>
          )}
        </Box>
      )}
    </>
  );
};

export { ConfirmScreen };
