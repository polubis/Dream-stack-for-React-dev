import styled from 'styled-components';
import type { ChipsProps } from './defs';
import c from 'classnames';
import { wrap } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.div`
  ${wrap()}

  & > * {
    margin: 0 ${tokens.spacing[100]} ${tokens.spacing[100]} 0;
  }
`;

const Chips = ({ className, children }: ChipsProps) => {
  return <Container className={c('chips', className)}>{children}</Container>;
};

export { Chips };
