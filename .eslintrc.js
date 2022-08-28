module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'google',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    '@typescript-eslint',
  ],
  'rules': {
    'linebreak-style': 1,
    'require-jsdoc': 0,
    'max-len': [2, {'code': 100}],
    'no-unused-vars': 1,
    'camelcase': 'off',
  },
};
