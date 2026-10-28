import { test as base } from 'playwright-bdd';
import { PersonalDetailsPage } from '../pages/PersonalDetailsPage';
import { CaseProLoginPage } from '../pages/CaseProLoginPage';
import { CaseProSubmissionPage } from '../pages/CaseProSubmissionPage';
import { JobDetailsPage } from '../pages/JobDetailsPage';
import { BenefitsPage } from '../pages/BenefitsPage';
import { ReviewPage } from '../pages/ReviewPage';
import { WindowManager } from '../utils/WindowManager';
import { FrameManager } from '../utils/FrameManager';

type Pages = {
  personalDetailsPage: PersonalDetailsPage;
  jobDetailsPage: JobDetailsPage;
  benefitsPage: BenefitsPage;
  reviewPage: ReviewPage;
  caseProLoginPage: CaseProLoginPage;
  caseProSubmissionPage: CaseProSubmissionPage;
  windowManager: WindowManager;
  frameManager: FrameManager;
  caseProState: {
    generatedTicketId: string;
  };
};

export const test = base.extend<Pages>({
  personalDetailsPage: async ({ page }, use) => {
    await use(new PersonalDetailsPage(page));
  },

  jobDetailsPage: async ({ page }, use) => {
    await use(new JobDetailsPage(page));
  },

  benefitsPage: async ({ page }, use) => {
    await use(new BenefitsPage(page));
  },

  reviewPage: async ({ page }, use) => {
    await use(new ReviewPage(page));
  },

  caseProLoginPage: async ({ page }, use) => {
    await use(new CaseProLoginPage(page));
  },

  caseProSubmissionPage: async ({ page }, use) => {
    await use(new CaseProSubmissionPage(page));
  },

  windowManager: async ({ page, context }, use) => {
    await use(new WindowManager(context, page));
  },

  frameManager: async ({}, use) => {
    await use(new FrameManager());
  },

  // A separate Case ID state for each test/scenario.
  caseProState: async ({}, use) => {
    await use({ generatedTicketId: '' });
  },
});

export { expect } from '@playwright/test';
