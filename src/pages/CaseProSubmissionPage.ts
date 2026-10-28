import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { env } from '../config/env';

export class CaseProSubmissionPage extends BasePage {
  // Requester page
  async open(): Promise<void> {
    await this.goto(env.caseProAppUrl);
  }

  async expectRequesterPageVisible(): Promise<void> {
    await expect(
      this.page.getByRole('heading', { name: 'Requester Details' })
    ).toBeVisible();
  }

  async fillRequesterDetails(
    fullName: string,
    employeeId: string,
    email: string,
    department: string,
    priority: string
  ): Promise<void> {
    await this.page.getByLabel('Full name').fill(fullName);
    await this.page.getByLabel('Employee ID').fill(employeeId);
    await this.page.getByLabel('Email address').fill(email);
    await this.page.getByLabel('Department').selectOption({ label: department });
    await this.page.getByLabel(priority, { exact: true }).check();
  }

  async expectRequesterDetails(
    fullName: string,
    employeeId: string,
    email: string,
    priority: string
  ): Promise<void> {
    await expect(this.page.getByLabel('Full name')).toHaveValue(fullName);
    await expect(this.page.getByLabel('Employee ID')).toHaveValue(employeeId);
    await expect(this.page.getByLabel('Email address')).toHaveValue(email);
    await expect(
      this.page.getByLabel(priority, { exact: true })
    ).toBeChecked();
  }

  // Shared navigation
  async clickNext(): Promise<void> {
    await this.page.getByRole('button', { name: 'Next' }).click();
  }

  async expectStepVisible(step: number): Promise<void> {
    await expect(this.page.getByTestId(`screen-${step}`)).toBeVisible();
  }

  // Case details
  async fillCaseDetails(
    subject: string,
    category: string,
    caseType: string,
    description: string,
    impactLevel: string
  ): Promise<void> {
    await this.page.getByLabel('Subject').fill(subject);
    await this.page.getByLabel('Category').selectOption({ label: category });
    await this.page.getByLabel(caseType, { exact: true }).check();

    // Impact level is relevant when the selected case type is Incident.
    if (caseType === 'Incident') {
      await this.page.getByLabel('Impact level').selectOption({
        label: impactLevel,
      });
    }

    await this.page.getByLabel('Description').fill(description);
  }

  async expectCaseDetails(
    subject: string,
    category: string,
    caseType: string,
    description: string,
    impactLevel: string
  ): Promise<void> {
    await expect(this.page.getByLabel('Subject')).toHaveValue(subject);

    await expect(
      this.page.getByLabel('Category').locator('option:checked')
    ).toHaveText(category);

    // Verify the selected case type as well as the other case fields.
    await expect(
      this.page.getByLabel(caseType, { exact: true })
    ).toBeChecked();

    await expect(this.page.getByLabel('Description')).toHaveValue(description);

    if (caseType === 'Incident') {
      await expect(
        this.page.getByLabel('Impact level').locator('option:checked')
      ).toHaveText(impactLevel);
    }
  }

  // Timesheet
  async fillTimesheetDetails(
    date: string,
    project: string,
    taskDescription: string,
    hours: string
  ): Promise<void> {
    await this.page.getByTestId('input-ts-date-0').fill(date);

    await this.page.getByTestId('select-ts-project-0').selectOption({
      label: project,
    });

    await this.page.getByTestId('input-ts-task-0').fill(taskDescription);
    await this.page.getByTestId('input-ts-hours-0').fill(hours);
  }

  async expectTimesheetDetails(
    date: string,
    project: string,
    taskDescription: string,
    hours: string
  ): Promise<void> {
    await expect(this.page.getByTestId('input-ts-date-0')).toHaveValue(date);

    await expect(
      this.page.getByTestId('select-ts-project-0').locator('option:checked')
    ).toHaveText(project);

    await expect(this.page.getByTestId('input-ts-task-0')).toHaveValue(
      taskDescription
    );

    await expect(this.page.getByTestId('input-ts-hours-0')).toHaveValue(hours);
  }

  // Review and submission
  async expectReviewPageVisible(): Promise<void> {
    await expect(this.page.getByTestId('screen-4')).toBeVisible();
    await expect(
      this.page.getByRole('heading', { name: 'Review & Submit' })
    ).toBeVisible();
  }

  async clickSubmitCase(): Promise<void> {
    await this.page.getByTestId('btn-submit').click();
  }

  async expectReviewRequesterName(fullName: string): Promise<void> {
    await expect(this.page.getByTestId('summary-fullName')).toHaveText(fullName);
  }

  async expectSubmitErrorHidden(): Promise<void> {
    await expect(this.page.getByTestId('submit-error')).toBeHidden();
  }

  async getGeneratedTicketId(): Promise<string> {
    await expect(this.page.getByTestId('screen-success')).toBeVisible();

    const ticketId = (
      await this.page.getByTestId('case-id').innerText()
    ).trim();

    expect(ticketId).not.toBe('');
    console.log(`Generated Ticket ID: ${ticketId}`);

    return ticketId;
  }

  // Requester logout
  async logout(): Promise<void> {
    await this.page.getByTestId('btn-logout').click();
  }

  // Admin search and verification
  async searchCaseById(caseId: string): Promise<void> {
    await this.page.getByTestId('input-search-caseId').fill(caseId);
    await this.page.getByTestId('btn-search').click();

    const caseIdLocator = this.page.getByTestId('case-detail-id');

    await expect(caseIdLocator).toBeVisible();
    await expect(caseIdLocator).toHaveText(caseId);
  }

  async getCaseStatus(): Promise<string> {
    const statusLocator = this.page.getByTestId('case-detail-status');

    await expect(statusLocator).toBeVisible();

    const status = (await statusLocator.innerText()).trim();

    expect(status).not.toBe('');
    console.log(`Case Status: ${status}`);

    return status;
  }
}
