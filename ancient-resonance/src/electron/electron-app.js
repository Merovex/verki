"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var debug = true;
var windowStateKeeper = require('electron-window-state');
var win;
if (debug) {
    require('electron-reload')(__dirname);
}
function createWindow() {
    var _a = electron_1.screen.getPrimaryDisplay().workAreaSize, width = _a.width, height = _a.height;
    var mainWindowState = windowStateKeeper({ defaultWidth: width, defaultHeight: height });
    // Create Browser Window, using windowStateKeeper.
    win = new electron_1.BrowserWindow({
        'x': mainWindowState.x,
        'y': mainWindowState.y,
        'width': mainWindowState.width,
        'height': mainWindowState.height
    });
    mainWindowState.manage(win);
    win.loadURL("file://" + __dirname + "/src/index.html"); // load index.html
    // open devtools
    if (debug) {
        win.webContents.openDevTools();
    }
    console.log(electron_1.app.getName());
    win.on('closed', function () { win = null; });
}
// APPLICATION EVENTS
// ==================
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
    if (win === null) {
        createWindow();
    }
});
//# sourceMappingURL=electron-app.js.map