'use strict';

const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let window;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    window = new BrowserWindow({
        height: 728,
        width: 1024
    });

    if (process.env.HOT) {
        window.loadURL(`file://${__dirname}/index.development.html`);
    } else {
        window.loadURL(`file://${__dirname}/index.html`);
    }

    if (process.env.NODE_ENV === 'development') {
        window.openDevTools();
    }

    window.on('closed', () => {
        window = undefined;
    });
});
