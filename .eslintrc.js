module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended'
  ],
  // required to lint *.vue files
  plugins: ['vue'],
  // add your custom rules here
  rules: {
    'no-console': 0,
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'never']
  },
  globals: {}
}
