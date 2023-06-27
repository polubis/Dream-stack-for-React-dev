interface APIEnv {
  NEXT_PUBLIC_API_URL?: string;
}

type APIEnvKey = keyof APIEnv;

type EnvVar<K extends APIEnvKey> = [K, APIEnv[K]];

export type { APIEnv, APIEnvKey, EnvVar };
