import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  fullyParallel: false,
  forbidOnly: !!process.env.CI,
  retries: 3,
  workers: process.env.CI ? 1 : undefined,
  reporter: [[ 'html' ], [ 'list' ]],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});