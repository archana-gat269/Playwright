import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { env } from '../config/env';

export class CaseProLoginPage extends BasePage {
  async open(): Promise<void> {
    await this.goto(env.caseProAppUrl);
    await expect(this.page.getByTestId('login-screen')).toBeVisible();
  }

  async enterUsername(username: string): Promise<void> {
    await this.page.getByTestId('input-username').fill(username);
  }

  async enterPassword(password: string): Promise<void> {
    await this.page.getByTestId('input-password').fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.page.getByTestId('btn-login').click();
  }

  async expectLoginError(message: string): Promise<void> {
    await expect(this.page.getByTestId('login-error')).toHaveText(message);
  }

  async expectLoggedIn(): Promise<void> {
    await expect(this.page.getByTestId('login-screen')).toBeHidden();
  }

  // 
  async loginAsAdmin(): Promise<void> {
  if (!env.caseProAdminUsername || !env.caseProAdminPassword) {
    throw new Error('CasePro admin credentials are missing from .env');
  }

  await this.enterUsername(env.caseProAdminUsername);
  await this.enterPassword(env.caseProAdminPassword);
  await this.clickSignIn();
}
}
