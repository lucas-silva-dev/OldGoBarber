module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  // O Prettier e o airbnb podem ter algumas regras que se sobrescrevem
  // é só configurar o arquivo ".prettierrc"
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // Os problemas que o Prettier identifica, são informados como erro no Eslint
    'prettier/prettier': 'error',
    // Para as classes não serem obrigadas a usar o This
    'class-methods-use-this': 'off',
    // Recer parametro e fazer alterações, por padrão o sequelize não permite
    'no-param-reassign': 'off',
    // Por padrão o Elint pede que todas as variáveis sejam no formato camelCase
    camelcase: 'off',
    // Para poder declarar variáveis que irá utlizar, nesse caso o 'next'
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
  },
};
