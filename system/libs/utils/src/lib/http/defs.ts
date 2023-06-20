type HttpMethod = 'get' | 'post' | 'put' | 'patch' | 'delete';

interface HttpBase extends Omit<RequestInit, 'body' | 'method'> {
  url?: string;
  method?: HttpMethod;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type HttpSearchParams = Record<string, any>;

type HttpConfig = HttpBase;

type SourceConfig = HttpBase;

type SourceDefaults = Omit<SourceConfig, 'url'>;

export type {
  HttpBase,
  HttpMethod,
  HttpConfig,
  SourceDefaults,
  SourceConfig,
  HttpSearchParams,
};
