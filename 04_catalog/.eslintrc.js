module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  // parserOptions: {
  //   parser: '@babel/eslint-parser',
  // },
  rules: {
    'vuejs-accessibility/label-has-for': [
      'error',
      {
        components: ['VLabel'],
        controlComponents: ['VInput'],
        required: {
          some: ['nesting', 'id']
        },
        allowChildren: false,
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
};
