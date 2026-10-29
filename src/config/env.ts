
import * as dotenv from 'dotenv';
import * as path from 'path';
import { pathToFileURL } from 'url';

dotenv.config();

export const env = {
  onboardlyAppUrl:
    process.env.ONBOARDLY_APP_URL ||
    pathToFileURL(
      path.resolve(__dirname, '../../apps/onboardly-app.html')
    ).href,

  // CasePro — Case Management app
  caseProAppUrl:
    process.env.CASEPRO_APP_URL ||
    'https://automationts.onrender.com/',

  // CasePro requester credentials
  caseProUsername: process.env.CASEPRO_USERNAME || '',
  caseProPassword: process.env.CASEPRO_PASSWORD || '',

  // CasePro admin credentials
  caseProAdminUsername: process.env.CASEPRO_ADMIN_USERNAME || '',
  caseProAdminPassword: process.env.CASEPRO_ADMIN_PASSWORD || '',
};
