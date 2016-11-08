'use strict';
module.exports = {
  rules: {
    // Variables
    'no-catch-shadow': 2,
    'no-delete-var': 2,           // Default
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': 2,
    'no-undef-init': 2,
    'no-undef': [2, { typeof: false } ],
    'no-unused-vars': [2, { vars: 'local' } ],
    'no-use-before-define': [2, 'nofunc']
  }
};