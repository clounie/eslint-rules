'use strict';
module.exports = {
  rules: {
    // Best Practices
    'block-scoped-var': 2,
    'consistent-return': 2,
    'curly': [2, 'multi-line'],   // Allow single w/o braces, require multi w/braces
    'default-case': 2,            // Require default case in switch statements
    'dot-notation': [2, { allowKeywords: true } ],
    'eqeqeq': 2,                  // Require === and !==
    'guard-for-in': 2,
    'no-alert': 2,
    'no-caller': 0,               // Callee is used in Leaflet among other dependencies
    'no-else-return': 2,
    'no-empty-pattern': 2,
    'no-eq-null': 2,              // Related to eqeqeq
    'no-eval': 2,
    'no-extend-native': 2,
    'no-extra-bind': 2,           // Typically a code error
    'no-fallthrough': 2,          // Default is on. Disables unsafe fallthrough in switch statements
    'no-floating-decimal': 2,
    'no-implicit-coercion': 2,
    'no-implied-eval': 2,
    'no-invalid-this': 1,
    'no-iterator': 2,
    'no-labels': 2,
    'no-loop-func': 2,
    'no-magic-numbers': [1, { enforceConst: false } ],
    'no-multi-spaces': 2,
    'no-multi-str': 2,
    'no-native-reassign': 2,
    'no-new-func': 2,             // Passing it a string is like calling eval on the string
    'no-new-wrappers': 2,         // No using Boolean/Number/String with the 'new' operator
    'no-new': 2,                  // No 'new Object()' calls unless you're assigning it to something
    'no-octal-escape': 2,
    'no-octal': 2,                // Default
    'no-param-reassign': 1,
    'no-process-env': 1,
    'no-proto': 2,
    'no-redeclare': [2, { builtinGlobals: true } ],   // Default. We made it stricter
    'no-return-assign': [2, 'except-parens'],
    'no-script-url': 2,
    'no-self-compare': 2,
    'no-sequences': 2,
    'no-throw-literal': 2,
    'no-unused-expressions': 2,
    'no-useless-call': 2,
    'no-useless-concat': 2,
    'no-void': 2,
    'no-warning-comments': 1,     // Might mean the code isn't ready; warn at least.
    'no-with': 2,
    'radix': 1,
    'vars-on-top': 2,
    'wrap-iife': 2,               // Require immediate function invocation to be wrapped in parentheses
    'yoda': [2, 'never']
  }
};