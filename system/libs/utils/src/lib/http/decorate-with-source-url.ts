import type { FactoryConfig, SourceConfig } from './defs';

const decorateWithSourceUrl = (
  { url }: SourceConfig,
  factoryConfig: FactoryConfig
): FactoryConfig => ({ ...factoryConfig, url: url + factoryConfig.url });

export { decorateWithSourceUrl };
