module.exports = {
    module: {
        loaders: [{
            exclude: /node_modules/,
            loaders: [
                'babel-loader'
            ],
            test: /\.js?$/
        }]
    },
    output: {
        filename: 'bundle.js',
        libraryTarget: 'commonjs2',
        path: __dirname
    },
    plugins: [],
    port: 3000
};
