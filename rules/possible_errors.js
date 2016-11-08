'use strict';
module.exports = {
  rules: {
    // Possible Errors
    'comma-dangle': [2, 'never'],
    'no-cond-assign': [2, 'always'],
    'no-console': 0,
    'no-extra-parens': [2, 'functions'],
    'no-inner-declarations': 0,    // With ES6, inner functions are allowed
    'no-unexpected-multiline': 2,
    'valid-jsdoc': [2, {
      requireReturn: false     // Only applies if the function has no return
    } ]
  }
};