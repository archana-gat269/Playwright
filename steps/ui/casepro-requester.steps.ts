import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../src/fixtures/pageFixtures';

const { Given, When, Then } = createBdd(test);

const requester = {
  fullName: 'Archana Gat',
  employeeId: '10702',
  email: 'archana.test@example.com',
  department: 'Engineering',
  priority: 'High',
};

const caseDetails = {
  subject: 'Unable to access the application',
  category: 'Technical',
  type: 'Incident',
  description: 'I am unable to access the application. Please investigate.',
  impactLevel: 'High',
};

const timesheet = {
  date: '2026-10-28',
  project: 'Project Alpha',
  task: 'API automation testing',
  hours: '8',
};

Given('I open the CasePro application', async ({ caseProSubmissionPage }) => {
  // The login steps have already completed in the feature scenario.
  await caseProSubmissionPage.expectRequesterPageVisible();
});

When('I fill in the requester details', async ({ caseProSubmissionPage }) => {
  await caseProSubmissionPage.fillRequesterDetails(
    requester.fullName,
    requester.employeeId,
    requester.email,
    requester.department,
    requester.priority
  );
});

Then(
  'the requester details should be entered correctly',
  async ({ caseProSubmissionPage }) => {
    await caseProSubmissionPage.expectRequesterDetails(
      requester.fullName,
      requester.employeeId,
      requester.email,
      requester.priority
    );
  }
);

When('I click Next on the Requester page', async ({ caseProSubmissionPage }) => {
  await caseProSubmissionPage.clickNext();
});

When('I fill in the Case Details', async ({ caseProSubmissionPage }) => {
  await caseProSubmissionPage.fillCaseDetails(
    caseDetails.subject,
    caseDetails.category,
    caseDetails.type,
    caseDetails.description,
    caseDetails.impactLevel
  );
});

Then(
  'the Case Details should be entered correctly',
  async ({ caseProSubmissionPage }) => {
    await caseProSubmissionPage.expectCaseDetails(
      caseDetails.subject,
      caseDetails.category,
      caseDetails.type,
      caseDetails.description,
      caseDetails.impactLevel
    );
  }
);

When(
  'I click Next on the Case Details page',
  async ({ caseProSubmissionPage }) => {
    await caseProSubmissionPage.clickNext();
  }
);

When('I fill in the Timesheet details', async ({ caseProSubmissionPage }) => {
  await caseProSubmissionPage.fillTimesheetDetails(
    timesheet.date,
    timesheet.project,
    timesheet.task,
    timesheet.hours
  );
});

Then(
  'the Timesheet details should be entered correctly',
  async ({ caseProSubmissionPage }) => {
    await caseProSubmissionPage.expectTimesheetDetails(
      timesheet.date,
      timesheet.project,
      timesheet.task,
      timesheet.hours
    );
  }
);

When(
  'I click Next on the Timesheet page',
  async ({ caseProSubmissionPage }) => {
    await caseProSubmissionPage.clickNext();
  }
);

Then('the Review page should be displayed', async ({ caseProSubmissionPage }) => {
  await caseProSubmissionPage.expectReviewPageVisible();
});

When('I submit the case', async ({ caseProSubmissionPage }) => {
  await caseProSubmissionPage.clickSubmitCase();
});

Then(
  'the case submission should complete successfully',
  async ({ caseProSubmissionPage, caseProState }) => {
    caseProState.generatedTicketId =
      await caseProSubmissionPage.getGeneratedTicketId();

    console.log(
      `Ticket ID saved for admin search: ${caseProState.generatedTicketId}`
    );
  }
);

When(
  'I log out from the requester account',
  async ({ caseProSubmissionPage }) => {
    await caseProSubmissionPage.logout();
  }
);

When('I log in as the CasePro admin', async ({ caseProLoginPage }) => {
  await caseProLoginPage.loginAsAdmin();
});

When(
  'I search for the submitted case as admin',
  async ({ caseProSubmissionPage, caseProState }) => {
    expect(caseProState.generatedTicketId).not.toBe('');

    await caseProSubmissionPage.searchCaseById(
      caseProState.generatedTicketId
    );
  }
);

Then(
  'the case ID and status should be displayed',
  async ({ caseProSubmissionPage, caseProState }) => {
    const status = await caseProSubmissionPage.getCaseStatus();

    console.log(`Verified Case ID: ${caseProState.generatedTicketId}`);
    console.log(`Verified Status: ${status}`);

    expect(['SUBMITTED', 'APPROVED']).toContain(status.toUpperCase());
  }
);




