const {
  override,
  addBabelPlugins,
  addWebpackModuleRule
} = require('customize-cra')

module.exports = override(
  ...addBabelPlugins(
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining'
  ),
  addWebpackModuleRule({
    test: /\.(js|mjs|jsx|ts|tsx)$/,
    include: /node_modules\/graphql-request/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          '@babel/plugin-proposal-class-properties',
          '@babel/plugin-proposal-nullish-coalescing-operator',
          '@babel/plugin-proposal-optional-chaining'
        ]
      }
    }
  })
)
