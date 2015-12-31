const webpack = require('webpack');
const webpackTargetElectronRenderer = require('webpack-target-electron-renderer');

const baseConfig = require('./webpack.config.base');

const config = Object.create(baseConfig);

config.debug = true;

config.devtool = 'cheap-module-eval-source-map';

config.entry = [
    'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
    './app/index'
];

config.output.publicPath = 'http://localhost:3000/dist/';

config.plugins.push(
    new webpack.DefinePlugin({
        '__DEV__': true,
        'process.env': {
            'NODE_ENV': JSON.stringify('development')
        }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
);

config.target = webpackTargetElectronRenderer(config);

// TODO: Delete when CSS is removed from boilerplate example.
config.module.loaders.push({
    test: /^((?!\.module).)*\.css$/,
    loaders: [
        'style-loader',
        'css-loader'
    ]
}, {
    test: /\.module\.css$/,
    loaders: [
        'style-loader',
        'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!'
    ]
});

module.exports = config;
