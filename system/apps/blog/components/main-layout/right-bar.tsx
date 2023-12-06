import { useScroll } from '@system/figa-hooks';
import { Bar, type BarProps } from '@system/figa-ui';

const RightBar = (props: Omit<BarProps, 'right' | 'left'>) => {
  const [scroll] = useScroll({ delay: 50 });

  return scroll.is === 'progress' && scroll.value < 94 ? (
    <Bar {...props} right />
  ) : null;
};

export { RightBar };
