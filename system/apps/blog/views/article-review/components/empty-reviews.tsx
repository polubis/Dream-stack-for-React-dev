import type { ToggleReturn } from '@system/figa-hooks';
import {
  Box,
  Button,
  CloseIcon,
  Field,
  Font,
  Popover,
  Textarea,
} from '@system/figa-ui';
import {
  add_article_review_actions,
  useAddArticleReviewStore,
} from '../../../store/add-article-review';
import { article_selectors } from '../../../store/article';
import { article_management_actions } from '../../../store/article-management';

const EmptyReviews = () => {
  const addArticleReviewStore = useAddArticleReviewStore();
  const article = article_selectors.useArticle();

  const handleConfirm = async (toggler: ToggleReturn): Promise<void> => {
    await article_management_actions.confirm(article.id);
    toggler.close();
  };

  const { form, is } = addArticleReviewStore;

  return (
    <Box center>
      <Box center maxWidth="420px" spacing={[250, 500]}>
        <Font variant="h5">No reviews added yet 😒</Font>
        <Font variant="b2">
          This article is just added. Its normal that it takes time to perform a
          review. Would like to be first? Use the button below.
        </Font>

        <Popover
          trigger={({ toggle }) => (
            <Button size={2} onClick={toggle}>
              Add review
            </Button>
          )}
        >
          {(toggler) => (
            <Box
              spacing={[400, 150]}
              padding={[250, 250, 250, 250]}
              variant="outlined"
            >
              <Box orientation="row" between minWidth="320px">
                <Font variant="h6">Add your review</Font>
                <Button
                  size={1}
                  shape="rounded"
                  loading={is === 'busy'}
                  onClick={close}
                >
                  <CloseIcon />
                </Button>
              </Box>
              <Field
                label="Review*"
                hint="Remember to make review understable for readers..."
              >
                <Textarea
                  value={form.values.content}
                  onChange={(e) =>
                    add_article_review_actions.setField(
                      'content',
                      e.target.value
                    )
                  }
                />
              </Field>
              <Button
                onClick={() => handleConfirm(toggler)}
                loading={is === 'busy'}
                size={2}
              >
                Confirm
              </Button>
            </Box>
          )}
        </Popover>
      </Box>
    </Box>
  );
};

export { EmptyReviews };
