const express = require('express');
const path = require('path');
const webpack = require('webpack');

const config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);
const port = 3000;

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'app', 'hot-dev-app.html'));
});

app.listen(port, 'localhost', (error) => {
    if (error) {
        console.log(error);
        return;
    }

    console.log(`Listening at http://localhost:${port}`);
});
