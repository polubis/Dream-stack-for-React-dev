import { type SpacingKey, tokens } from '../theme-provider';

const spacing = {
  get: (key: SpacingKey): string => tokens.spacing[key],
  parse: (key: SpacingKey): SpacingKey =>
    Number.parseInt(tokens.spacing[key].replace('px', '')) as SpacingKey,
};

export { spacing };
