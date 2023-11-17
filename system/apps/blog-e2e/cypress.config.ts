import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
  env: {
    NEXT_PUBLIC_API_URL: process.env['NEXT_PUBLIC_API_URL'],
    ADMIN_LOGIN: process.env['ADMIN_LOGIN'],
    ADMIN_PASSWORD: process.env['ADMIN_PASSWORD'],
    DUMMY_ARTICLE_TITLE: 'Dummy article to create for e2e tests',
    DUMMY_ARTICLE_DESCRIPTION: 'My dummy article description',
  },
});
