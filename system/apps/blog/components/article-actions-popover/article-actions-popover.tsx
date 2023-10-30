import { ArticleStatus } from '@system/blog-api-models';
import { useToggle } from '@system/figa-hooks';
import {
  ActionsIcon,
  Box,
  Button,
  CloseIcon,
  Font,
  Modal,
  Popover,
} from '@system/figa-ui';
import { article_selectors } from '../../store/article';
import { article_management_actions } from '../../store/article-management';
import { change_article_status_selectors } from '../../store/change-article-status';

const ArticleActionsPopover = () => {
  const modal = useToggle<ArticleStatus>();
  const { id } = article_selectors.useArticle();
  const is = change_article_status_selectors.useIs();

  const handleAcceptClick = (): void => {
    modal.openWithData('Accepted');
  };

  const handleRejectClick = (): void => {
    modal.openWithData('NeedWork');
  };

  const handleConfirm = (): void => {
    article_management_actions.changeStatus(id, modal.data);
  };

  const loading = is === 'busy';

  return (
    <>
      {modal.opened && (
        <Modal spacing={[400]}>
          <Font variant="h6">
            Are you sure that you want to perform this action?
          </Font>

          <Box orientation="row" right spacing={[200]}>
            <Button size={2} loading={loading} onClick={handleConfirm}>
              Accept
            </Button>
            <Button
              variant="outlined"
              motive="tertiary"
              size={2}
              loading={loading}
              onClick={modal.close}
            >
              Cancel
            </Button>
          </Box>
        </Modal>
      )}
      <Popover
        trigger={({ toggle }) => (
          <Button
            size={2}
            shape="rounded"
            loading={loading}
            title="Actions"
            onClick={toggle}
          >
            <ActionsIcon />
          </Button>
        )}
      >
        {({ close }) => (
          <Box
            padding={[250, 250, 250, 250]}
            variant="outlined"
            spacing={[250]}
            minWidth="280px"
            maxWidth="600px"
          >
            <Box orientation="row" between>
              <Font variant="h6">Actions to perform</Font>
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
            <Box orientation="row" spacing={[200]}>
              <Button size={2} loading={loading} onClick={handleAcceptClick}>
                Accept
              </Button>
              <Button size={2} loading={loading} onClick={handleRejectClick}>
                Reject
              </Button>
            </Box>
          </Box>
        )}
      </Popover>
    </>
  );
};

export { ArticleActionsPopover };
