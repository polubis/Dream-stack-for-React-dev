import { ArrowTopIcon, Button, Bar as UIBar } from '@system/figa-ui';

import type { BarProps } from './defs';
import { useScroll, useScrollTo } from '@system/figa-hooks';

const Bar = ({ children, ...props }: BarProps) => {
  const [, { toTop }] = useScrollTo();
  const [state] = useScroll();

  return (
    <UIBar right {...props}>
      {children}
      {state.is !== 'idle' && state.value < 96 && (
        <Button shape="rounded" size={2} onClick={() => toTop()}>
          <ArrowTopIcon />
        </Button>
      )}
    </UIBar>
  );
};

export { Bar };
