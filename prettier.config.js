module.exports = {
  tabWidth: 4,
  arrowParens: 'always',
  trailingComma: 'all',
  singleQuote: true,
  overrides: [
      {
          files: '**/package.json',
          options: {
              tabWidth: 2,
          },
      },
  ],
};