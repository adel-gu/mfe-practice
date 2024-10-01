const { merge } = require('webpack-merge');
const { ModuleFederationPlugin } = require('webpack').container;
const commonConfig = require('./webpack.common');

const deps = require('./package.json').dependencies;

const devConfig = {
  mode: 'development',
  output: {
    publicPath: 'http://localhost:8082/',
  },
  devServer: {
    port: 8082,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'auth',
      filename: 'remoteEntry.js',
      exposes: {
        './AuthApp': './src/bootstrap.js',
      },
      // shared: {
      //   react: { singleton: true },
      //   'react-dom': { singleton: true },
      // },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
