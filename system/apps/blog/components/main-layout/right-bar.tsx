import { Bar, type BarProps } from '@system/figa-ui';

const RightBar = (props: Omit<BarProps, 'right' | 'left'>) => (
  <Bar {...props} right />
);

export { RightBar };
