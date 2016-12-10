const electron = require('electron');
const windowStateManager = require('electron-window-state');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let window;

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('ready', () => {
    const windowState = windowStateManager({
        file: 'window.json'
    });

    window = new BrowserWindow({
        fullscreen: windowState.isFullScreen,
        height: windowState.height,
        maximize: windowState.isMaximized,
        titleBarStyle: 'hidden',
        width: windowState.width,
        x: windowState.x,
        y: windowState.y
    });

    windowState.manage(window);

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
