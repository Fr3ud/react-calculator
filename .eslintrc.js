module.exports = {
  extends: ['prettier'],
  parser: 'babel-eslint',
  plugins: ['prettier'],
  rules: {
    quotes: [2, 'single', { avoidEscape: true }],
    'jsx-quotes': [2, 'prefer-double'],
  },
};
