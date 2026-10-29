
import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/pageFixtures';
import { env } from '../../src/config/env';

const { Given, When, Then } = createBdd(test);

Given('I open the CasePro login page', async ({ caseProLoginPage }) => {
  await caseProLoginPage.open();
});

When('I enter the CasePro username', async ({ caseProLoginPage }) => {
  if (!env.caseProUsername) {
    throw new Error('CASEPRO_USERNAME is missing from .env');
  }

  await caseProLoginPage.enterUsername(env.caseProUsername);
});

When('I enter the CasePro password', async ({ caseProLoginPage }) => {
  if (!env.caseProPassword) {
    throw new Error('CASEPRO_PASSWORD is missing from .env');
  }

  await caseProLoginPage.enterPassword(env.caseProPassword);
});

When('I click the CasePro Sign In button', async ({ caseProLoginPage }) => {
  await caseProLoginPage.clickSignIn();
});

Then('I should be logged in to CasePro', async ({ caseProLoginPage }) => {
  await caseProLoginPage.expectLoggedIn();
});
