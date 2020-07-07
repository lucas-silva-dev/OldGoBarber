// comentários do Package.json
export default {
  name: 'modulo02',
  version: '1.0.0',
  main: 'index.js',
  license: 'MIT',
  scripts: {
    dev: 'nodemon src/server.js ',
  },
  dependencies: {
    express: '^4.17.1',
    // para gerar hash da senha
    bcryptjs: '^2.4.3',
    // gera Token de autenticação
    jsonwebtoken: '^8.5.1',
    // para utilizar como dialeto do sequelize
    pg: '^7.14.0',
    'pg-hstore': '^2.3.3',
    // ORM para Bancos Relacionais no Node
    sequelize: '^5.21.2',
    // Para validação de dados de entrada, plataforma de Schema validation
    yup: '^0.27.0',
  },
  devDependencies: {
    // Verifica se o código está seguindo os padrões, fazendo o linting
    eslint: '^6.7.2',
    'eslint-plugin-import': '^2.19.1',
    // Config do airbnb para o Eslint, uma styleguide
    'eslint-config-airbnb-base': '^14.0.0',
    // Config do eslint com o prettier
    'eslint-config-prettier': '^6.7.0',
    'eslint-plugin-prettier': '^3.1.1',
    // Deixa o código "bonito", formatado correto de acordo com as regras
    prettier: '^1.19.1',
    // atualiza o servidor de forma automática
    nodemon: '^2.0.1',
    // faz com que o node consiga trabalhar com formatações mais recentes como o (import/export)
    sucrase: '^3.10.1',
    // Interface de linha de comando, para facilitar a criação de migrations, etc.
    'sequelize-cli': '^5.5.1',
  },
};
