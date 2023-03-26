/*
File content should be like this in the git repo:

// Dummy placeholder module to be replaced by atlas.
const messages = [];
export default messages;

Then it'll be replaced by Atlas:
 */

import messages1 from './atlas-messages/frontend-component-header/src/i18n';
import messages2 from './atlas-messages/frontend-component-footer/src/i18n';
import messages3 from './atlas-messages/frontend-app-learning/src/i18n';

export default [
  messages1,
  messages2,
  messages3,
];
