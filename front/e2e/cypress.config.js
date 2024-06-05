import { defineConfig } from 'cypress';

export default defineConfig({
  backendUrl: 'http://localhost:5000',
  viewportWidth: 1920,
  viewportHeight: 1080,
  video: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
