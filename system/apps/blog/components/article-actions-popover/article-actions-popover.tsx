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
import { article_store_selectors } from '../../store/article';
import { article_management_store_actions } from '../../store/article-management';
import { change_article_status_store_selectors } from '../../store/change-article-status';
import type { ReactNode } from 'react';

const Trigger = () => {
  const { toggle } = Popover.use();
  const is = change_article_status_store_selectors.useIs();
  const loading = is === 'busy';

  return (
    <Popover.Trigger>
      <Button
        size={2}
        shape="rounded"
        loading={loading}
        title="Actions"
        onClick={toggle}
      >
        <ActionsIcon />
      </Button>
    </Popover.Trigger>
  );
};

const Content = ({ children }: { children: ReactNode }) => {
  const { close } = Popover.use();

  return (
    <Popover.Content
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
      {children}
    </Popover.Content>
  );
};

const ArticleActionsPopover = () => {
  const modal = useToggle<ArticleStatus>();
  const { id } = article_store_selectors.useArticle();
  const is = change_article_status_store_selectors.useIs();

  const handleConfirm = (): void => {
    article_management_store_actions.changeStatus(id, modal.data);
  };

  const handleAcceptClick = (): void => {
    modal.openWithData('Accepted');
  };

  const handleRejectClick = (): void => {
    modal.openWithData('NeedWork');
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
            <Button
              variant="outlined"
              motive="tertiary"
              size={2}
              loading={loading}
              onClick={modal.close}
            >
              Cancel
            </Button>
            <Button size={2} loading={loading} onClick={handleConfirm}>
              Confirm
            </Button>
          </Box>
        </Modal>
      )}
      <Popover>
        <Trigger />
        <Content>
          <Box orientation="row" spacing={[150]}>
            <Button size={2} loading={loading} onClick={handleRejectClick}>
              Reject
            </Button>
            <Button size={2} loading={loading} onClick={handleAcceptClick}>
              Accept
            </Button>
          </Box>
        </Content>
      </Popover>
    </>
  );
};

export { ArticleActionsPopover };
