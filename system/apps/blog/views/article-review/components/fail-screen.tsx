import { Box, Button, Font } from '@system/figa-ui';
import type { FailScreenProps } from './defs';

const FailScreen = ({ onRetry }: FailScreenProps) => {
  return (
    <Box center orientation="row">
      <Box maxWidth="400px" center spacing={[250, 500]}>
        <Font variant="h5">❌ Something went wrong...</Font>
        <Font variant="b2">
          Try again with button below. If error occurs again it may be caused by
          not up to date address.
        </Font>
        <Button onClick={onRetry}>Retry</Button>
      </Box>
    </Box>
  );
};

export { FailScreen };
