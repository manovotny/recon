module.exports = {
    module: {
        loaders: [
            {
                loaders: [
                    'style-loader',
                    'css-loader'
                ],
                test: /\.css/
            },
            {
                exclude: /node_modules/,
                loaders: [
                    'babel-loader'
                ],
                test: /\.js$/
            },
            {
                loaders: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
                test: /\.scss$/
            }
        ]
    },
    output: {
        filename: 'bundle.js',
        libraryTarget: 'commonjs2',
        path: __dirname
    },
    plugins: [],
    port: 3000
};
