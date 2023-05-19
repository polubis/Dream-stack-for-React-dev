import { Box, Button, Font } from '@system/figa-ui';
import styled from 'styled-components';

import type { IntroSectionProps } from './defs';

const Container = styled.div`
  max-width: 400px;
  margin: auto;
`;

const IntroSection = ({
  header,
  description,
  action,
  onConfirm,
}: IntroSectionProps) => {
  return (
    <Container>
      <Box spacing={[150, 500]} padding={[350, 350, 350, 350]}>
        <Font variant="h6">{header}</Font>
        <Font variant="b1">{description}</Font>
        <Button onClick={onConfirm}>{action}</Button>
      </Box>
    </Container>
  );
};

export { IntroSection };
