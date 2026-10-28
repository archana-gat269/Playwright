// 
import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

// Application URL fallback
if (!process.env.ONBOARDLY_APP_URL) {
  process.env.ONBOARDLY_APP_URL = 'https://automationts.onrender.com/';
}

// Generate Playwright tests from BDD feature files
const bddTestDir = defineBddConfig({
  features: 'features/ui/**/*.feature',
  steps: ['steps/**/*.ts', 'src/fixtures/pageFixtures.ts'],
});

export default defineConfig({
  testDir: './tests',

  // Test timeouts
  timeout: 45_000,
  expect: {
    timeout: 10_000,
  },

  // Execution settings
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,

  // Reports
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['junit', { outputFile: 'reports/results.xml' }],
  ],

  // Browser and debugging settings
  use: {
    headless: process.env.CI
      ? true
      : process.env.HEADLESS !== 'False',
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 15_000,
    navigationTimeout: 20_000,
  },

  projects: [
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'bdd',
      testDir: bddTestDir,
      use: { ...devices['Desktop Firefox'] },
    },
  ],
});
