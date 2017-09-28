const {format} = require('url');

const {resolve} = require('app-root-path');
const {BrowserWindow, app} = require('electron');
const isDev = require('electron-is-dev');
const prepareNext = require('electron-next');
const electronWindowState = require('electron-window-state');

require('electron-debug')({showDevTools: isDev});

const installExtensions = () => {
    const {default: installExtension, REACT_DEVELOPER_TOOLS, REACT_PERF, REDUX_DEVTOOLS} = require('electron-devtools-installer');
    const extensions = [
        REACT_DEVELOPER_TOOLS,
        REACT_PERF,
        REDUX_DEVTOOLS
    ];

    extensions.forEach((extension) => {
        installExtension(extension)
            .then((name) => console.log(`Added Extension: ${name}`))
            .catch((error) => console.log('An error occurred: ', error));
    });
};

app.on('ready', async () => {
    await prepareNext('./renderer');

    installExtensions();

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
