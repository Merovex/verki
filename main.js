"use strict";
exports.__esModule = true;
var electron_1 = require("electron");
var path = require('path');
var url = require('url');
var windowStateKeeper = require('electron-window-state');
require('electron-reload')(__dirname);
var win;
function createWindow() {
    var mainWindowState = windowStateKeeper({ defaultWidth: 1000, defaultHeight: 800 });
    // Create Browser Window, using windowStateKeeper.
    win = new electron_1.BrowserWindow({
        'x': mainWindowState.x,
        'y': mainWindowState.y,
        'width': mainWindowState.width,
        'height': mainWindowState.height
    });
    mainWindowState.manage(win);
    win.loadURL("file://" + __dirname + "/index.html"); // load index.html
    // open devtools
    // win.webContents.openDevTools();
    console.log(electron_1.app.getName());
    win.on('closed', function () { win = null; });
}
electron_1.app.on('ready', createWindow);
// Quit when all windows are closed
electron_1.app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        electron_1.app.quit();
    }
});
electron_1.app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    // if (mainWindow === null) { createWindow() }
});
