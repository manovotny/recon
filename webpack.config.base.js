module.exports = {
    module: {
        loaders: [{
            test: /\.js?$/,
            loaders: ['babel-loader'],
            exclude: /node_modules/
        }]
    },
    output: {
        path: __dirname,
        filename: 'bundle.js',
        libraryTarget: 'commonjs2'
    },
    port: 3000,
    plugins: []
};
