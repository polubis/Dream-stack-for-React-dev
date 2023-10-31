import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  env: {
    NEXT_PUBLIC_API_URL: process.env['NEXT_PUBLIC_API_URL'],
    REGULAR_USER_LOGIN: process.env['REGULAR_USER_LOGIN'],
    REGULAR_USER_PASSWORD: process.env['REGULAR_USER_PASSWORD'],
    ADMIN_USER_LOGIN: process.env['ADMIN_USER_LOGIN'],
    ADMIN_USER_PASSWORD: process.env['ADMIN_USER_PASSWORD'],
  },
});
