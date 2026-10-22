import { Locator, Page, expect, test } from '@playwright/test';
import { BasePage } from './BasePage';
import { env } from '../config/env';

export class LoginPage extends BasePage {

  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly signInButton: Locator;
  private readonly loginError: Locator;
  private readonly demoAccountsBanner: Locator;
  
   constructor(page: Page) {
    super(page);
    this.usernameInput = page.getByTestId('input-username');
    this.passwordInput = page.getByTestId('input-password');
    this.signInButton = page.getByTestId('btn-login');
    this.loginError = page.getByTestId('login-error');
    this.demoAccountsBanner = page.locator('text=Demo accounts');
  }

  async opencasepro(): Promise<void>{
    await this.goto(env.caseProAppUrl);
  }

  async fillUsername(username: string): Promise<void> {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }

   async login(username: string, password: string): Promise<void>{
    await this.fillUsername(username);
    await this.fillPassword(password);
    await this.clickSignIn();
  }

   async expectLoginErrorVisible(): Promise<string | null> {
    await expect(this.loginError).toBeVisible();
    const actual = await this.getText(this.loginError);
    console.log(`login error displayed: "${actual}"`);
    return actual;
  }

    /** Exact-match assertion — use when you know the expected message in advance. 
   async expectLoginError(message: string): Promise<void> {
    await test.step(`login error -> expected: "${message}"`, async () => {
      const actual = await this.loginError.textContent();
      console.log(`login error -> expected: "${message}", actual: "${actual}", match: ${actual === message}`);
      await expect(this.loginError).toHaveText(message);
    });
  } */

}