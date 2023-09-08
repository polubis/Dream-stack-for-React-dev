import styled from 'styled-components';
import { Font } from '../font';
import type { DetailProps } from './defs';
import c from 'classnames';
import { tokens } from '../theme-provider';

const Container = styled.div`
  display: grid;
  grid-template-columns: auto;
  gap: ${tokens.spacing[50]};
`;

const Detail = ({ className, label, value }: DetailProps) => {
  return (
    <Container className={c('detail', className)}>
      <Font variant="b2">{label}</Font>
      <Font variant="b1" motive="primary">
        {value}
      </Font>
    </Container>
  );
};

export { Detail };
