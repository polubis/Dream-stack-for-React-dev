type EnvFixtureResetCb = (cb: () => void) => void;

interface EnvFixtureSetup {
  beforeAll: EnvFixtureResetCb;
  afterEach: EnvFixtureResetCb;
}

export type { EnvFixtureResetCb, EnvFixtureSetup };
