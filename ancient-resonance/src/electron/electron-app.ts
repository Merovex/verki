import {
	app,
	BrowserWindow,
  ipcMain,
  screen
}  from 'electron';
import * as path from 'path';
import * as url from 'url';

const debug = true;
const windowStateKeeper = require('electron-window-state');
let win: Electron.BrowserWindow;

if (debug) { require('electron-reload')(__dirname); }

function createWindow() {
  const {width, height} = screen.getPrimaryDisplay().workAreaSize;
	let mainWindowState = windowStateKeeper({ defaultWidth: width, defaultHeight: height });

	// Create Browser Window, using windowStateKeeper.
	win = new BrowserWindow({
    'x': mainWindowState.x,
    'y': mainWindowState.y,
    'width': mainWindowState.width,
    'height': mainWindowState.height
	});
	mainWindowState.manage(win);

 	win.loadURL(`file://${__dirname}/src/index.html`) // load index.html

	// open devtools
	if (debug) {win.webContents.openDevTools();}

  console.log(app.getName());
	win.on('closed', function() { win = null; })
}

// APPLICATION EVENTS
// ==================
app.on('ready', createWindow);

// Quit when all windows are closed
app.on('window-all-closed', function() {
	if (process.platform != 'darwin') {
		app.quit();
	}
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) { createWindow() }
})
