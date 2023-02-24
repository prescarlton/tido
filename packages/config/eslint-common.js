module.exports = {
  ignorePatterns: ['.eslintrc.js'],
  extends: ['plugin:jsx-a11y/recommended'],
  plugins: ['simple-import-sort', 'jsx-a11y'],
  rules: {
    'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
    'spaced-comment': 'error',
    'simple-import-sort/imports': 'warn',
  },
  settings: {
    'jsx-a11y': {
      components: {
        Box: 'div',
        Button: 'button',
        TextField: 'input',
        Select: 'select',
        Chip: 'div',
        Card: 'div',
        Link: 'a',
        Container: 'div',
        Grid: 'div',
      },
    },
  },
}
