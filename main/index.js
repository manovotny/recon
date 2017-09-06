const {format} = require('url');

const {resolve} = require('app-root-path');
const {BrowserWindow, app} = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const electronWindowState = require('electron-window-state');

app.on('ready', async () => {
    await prepareNext('./renderer');

    const windowState = electronWindowState();

    const window = new BrowserWindow({
        fullscreen: windowState.isFullScreen,
        height: windowState.height,
        maximize: windowState.isMaximized,
        titleBarStyle: 'hidden',
        width: windowState.width,
        x: windowState.x,
        y: windowState.y
    });

    windowState.manage(window);

    const devPath = 'http://localhost:8000/app';
    const prodPath = format({
        pathname: resolve('renderer/out/app/index.html'),
        protocol: 'file:',
        slashes: true
    });
    const url = isDev ? devPath : prodPath;

    window.loadURL(url);
});

app.on('window-all-closed', app.quit);
