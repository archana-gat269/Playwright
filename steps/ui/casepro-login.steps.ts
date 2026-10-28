
import { createBdd } from 'playwright-bdd';
import { test } from '../../src/fixtures/pageFixtures';

const { Given, When, Then } = createBdd(test);

Given('I open the CasePro login page', async ({ caseProLoginPage }) => {
  await caseProLoginPage.open();
});

When(
  'I enter username {string}',
  async ({ caseProLoginPage }, username: string) => {
    await caseProLoginPage.enterUsername(username);
  }
);

When(
  'I enter password {string}',
  async ({ caseProLoginPage }, password: string) => {
    await caseProLoginPage.enterPassword(password);
  }
);

When('I click the CasePro Sign In button', async ({ caseProLoginPage }) => {
  await caseProLoginPage.clickSignIn();
});

Then('I should be logged in to CasePro', async ({ caseProLoginPage }) => {
  await caseProLoginPage.expectLoggedIn();
});
