const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = [
    `webpack-hot-middleware/client?path=http://localhost:${config.port}/__webpack_hmr`,
    './src/index'
];

config.output.publicPath = `http://localhost:${config.port}/`;

config.plugins.push(
    new webpack.DefinePlugin({
        __DEV__: true,
        'process.env': {
            NODE_ENV: JSON.stringify('development')
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
