'use strict';
/**
* See http://eslint.org/docs/rules for the rules that eslint:recommended turns on by default.
* Rule Settings:
*  0 - off
*  1 - warning
*  2 - error
*/

// Make these global so that other ESLint config files can use them.
var config = {};

global.MAX_STATEMENTS_IN_FN = 20;
global.NUM_SPACES_INDENT = 2;

config = {
  extends: [
    'eslint:recommended',
    './rules/possible_errors.js',
    './rules/best_practices.js',
    './rules/strict.js',
    './rules/variables.js',
    './rules/nodejs_commonjs.js',
    './rules/stylistic_issues.js'
  ],
  env: {
    es6: true,
    node: true
  }
};
module.exports = config;