import { defineConfig } from 'cypress';

export default defineConfig({
    projectId: 'ai3e19',
    e2e: {
        baseUrl: 'http://localhost:5174/',
        setupNodeEvents(on, config) {
            // implement node event listeners here
        }
    }
});
