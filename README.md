# eslint-rules
ESLint settings  
`git clone https://github.com/clounie/eslint-rules.git`

#### Config file
To change the location of the config file [default config locations](http://eslint.org/docs/user-guide/configuring#configuration-cascading-and-hierarchy), add a `-c <config_file_path>` option to the eslint call in package.json

#### .eslint-local config
To add a local config for eslint, add it using the `-c <config_file_path>` flag.

---

### Examples:
Each of these belongs in the `scripts` object in a `package.json` file.

**ESLint, no config:**  
```js
{
  // ...
  "scripts": {
    "lint": "eslint ."
  }
  // ...
}
```  

**Specify Config:**
```js
{
  // ...
  "scripts": {
    "lint": "eslint -c __eslint_rules/.eslintrc.js ."
  }
  // ...
}
```  

**Specifying which files/directories to lint**
```js
{
  // ...
  "scripts": {
    "lint": "eslint '**/*.js' '**/.*.js'"
  }
  // ...
}
```

**With eslint-local:**
(Make sure you include the `extends` property in `.eslint-local.json` if you do this; see [example](.eslint-local.json))
```js
{
  // ...
  "scripts": {
    "lint": "eslint .eslint-local.json .",
  }
  // ...
}
```

**With eslint-local + globbing**
```js
{
  // ...
  "scripts": {
    "lint": "eslint -c .eslint-local.json '**/*.js' '**/.*.js'"
  }
  // ...
}
```
