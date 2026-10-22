import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/pageFixtures';
import { BenefitsPage } from '@pages/BenefitsPage';

const { Given, When, Then } = createBdd(test);

// ---------- Screen 1: Personal details ----------

Given('I am on the onboarding personal details screen', async ({ personalDetailsPage }) => {
  await personalDetailsPage.openonboardly();
  await personalDetailsPage.expectScreenVisible(1);
});


