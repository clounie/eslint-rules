'use strict';
module.exports = {
  rules: {
    // Stylistic Issues
    'array-bracket-spacing': [2, 'never', {
      arraysInArrays: true,
      objectsInArrays: true
    } ],
    'block-spacing': 2,
    'brace-style': 0,
    'camelcase': [2, { properties: 'never' } ],
    'comma-spacing': [2, { after: true } ], // Default
    'comma-style': [2, 'last'],   // Default
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [1, 'self'],
    'no-multiple-empty-lines': [1, { max: 2 } ],
    'func-names': 1,
    'indent': [1, global.NUM_SPACES_INDENT],
    'key-spacing': [0, { beforeColon: false, afterColon: true } ],
    'linebreak-style': [2, 'unix'],
    'max-statements': [1, global.MAX_STATEMENTS_IN_FN],
    'new-cap': 2,
    'new-parens': 2,
    'newline-after-var': [1, 'always'],
    'no-array-constructor': 2,
    'no-bitwise': 1,
    'no-mixed-spaces-and-tabs': 2,
    'no-nested-ternary': 2,
    'no-new-object': 1,
    'no-spaced-func': 2,
    'no-trailing-spaces': [1, { skipBlankLines: true } ],
    'no-unneeded-ternary': 1,
    'object-curly-spacing': [1, 'always'],
    'operator-assignment': [1, 'always'],
    'operator-linebreak': 1,
    'quote-props': [1, 'consistent-as-needed'],
    'quotes': [1, 'single', 'avoid-escape'],
    'semi-spacing': [2, { before: false, after: true } ],
    'semi': [2, 'always'],
    'space-after-keywords': [1, 'always'],
    'space-before-blocks': [1, 'always'],
    'space-before-function-paren': [1, { anonymous: 'always', named: 'never' } ],
    'space-infix-ops': 1,
    'space-return-throw-case': 1,
    'space-unary-ops': 1,
    'spaced-comment': 1,
    'wrap-regex': 1
  }
};