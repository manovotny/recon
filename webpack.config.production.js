const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.devtool = 'source-map';

config.entry = './src/index';

config.output.publicPath = '/';

config.plugins.push(
    new webpack.DefinePlugin({
        '__DEV__': false,
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    // TODO: Delete when CSS is removed from boilerplate example.
    new ExtractTextPlugin('style.css', {allChunks: true})
);

// TODO: Delete when CSS is removed from boilerplate example.
config.module.loaders.push({
    test: /^((?!\.module).)*\.css$/,
    loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader'
    )
}, {
    test: /\.module\.css$/,
    loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
    )
});

config.target = webpackTargetElectronRenderer(config);

module.exports = config;
