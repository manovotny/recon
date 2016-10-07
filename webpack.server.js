const path = require('path');

const express = require('express');
const webpack = require('webpack');

const config = require('./webpack.config.development');

const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    stats: {
        colors: true
    }
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'app', 'index.development.html'));
});

app.listen(config.port, 'localhost', (error) => {
    if (error) {
        console.log(error); // eslint-disable-line no-console

        return;
    }

    console.log(`Listening at http://localhost:${config.port}`); // eslint-disable-line no-console
});
