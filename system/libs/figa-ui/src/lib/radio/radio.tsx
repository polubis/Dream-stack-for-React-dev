import styled from 'styled-components';
import type { RadioProps } from './defs';
import c from 'classnames';
import { column } from '../shared';
import { tokens } from '../theme-provider';

const Container = styled.div`
  ${column()}
  width: max-content;

  & > *:not(:last-child) {
    margin-bottom: ${tokens.spacing[150]};
  }
`;

const Radio = ({ className, ...props }: RadioProps) => {
  // @TODO Find solution for wrong type assignment here later.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <Container {...(props as any)} className={c('radio', className)} />;
};

export { Radio };
