import styled from 'styled-components';
import type { BarProps } from './defs';
import c from 'classnames';
import { column } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.div`
  ${column()}
  position: fixed;
  bottom: ${tokens.spacing[250]};
  left: ${tokens.spacing[250]};
  transition: 0.3s transform ease-in-out;
  transform: scale(1);

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[150]};
  }

  &.hidden {
    transform: scale(0);
  }

  &.right {
    left: unset;
    right: ${tokens.spacing[250]};
  }

  &.top {
    bottom: unset;
    top: ${tokens.spacing[250]};
  }
`;

const Bar = ({ className, children, top, right, hidden }: BarProps) => {
  return (
    <Container className={c('bar', className, { top }, { right }, { hidden })}>
      {children}
    </Container>
  );
};

export { Bar };
