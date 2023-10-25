import { ArrowTopIcon, Button, Bar as UIBar } from '@system/figa-ui';

import type { BarProps } from './defs';
import { useScrollTo } from '@system/figa-hooks';

const Bar = ({ children, ...props }: BarProps) => {
  const [, { toTop }] = useScrollTo();

  return (
    <UIBar right {...props}>
      {children}
      <Button shape="rounded" size={2} onClick={() => toTop()}>
        <ArrowTopIcon />
      </Button>
    </UIBar>
  );
};

export { Bar };
