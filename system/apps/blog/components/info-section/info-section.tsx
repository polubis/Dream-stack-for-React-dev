import { Box, Font } from '@system/figa-ui';
import type { InfoSectionProps } from './defs';

export const InfoSection = ({
  title,
  description,
  footer,
  padding = [400, 400, 400, 400],
}: InfoSectionProps) => {
  return (
    <Box
      className="info-section"
      orientation="column"
      margin="auto"
      maxWidth="400px"
      padding={padding}
      spacing={[150, footer ? 400 : 0]}
    >
      <Font variant="h6">{title}</Font>
      <Font variant="b1">{description}</Font>
      {footer}
    </Box>
  );
};
