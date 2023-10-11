import { useScrollTo } from '@system/figa-hooks';
import { ArrowTopIcon, Button, LeftBar as UILeftBar } from '@system/figa-ui';

const LeftBar = () => {
  const [, { toTop }] = useScrollTo();

  return (
    <UILeftBar>
      <Button shape="rounded" size={2} onClick={() => toTop()}>
        <ArrowTopIcon />
      </Button>
    </UILeftBar>
  );
};

export { LeftBar };
