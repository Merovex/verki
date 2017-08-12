const {
	app,
	BrowserWindow
} = require('electron')
const path = require('path')
const url  = require('url')
const windowStateKeeper = require('electron-window-state');

let win;

function createWindow() {

	let mainWindowState = windowStateKeeper({ defaultWidth: 1000, defaultHeight: 800 });

	// Create Browser Window, using windowStateKeeper.
	win = new BrowserWindow({
		'x': mainWindowState.x,
	    'y': mainWindowState.y,
	    'width': mainWindowState.width,
	    'height': mainWindowState.height
	});
	mainWindowState.manage(win);

 	win.loadURL(`file://${__dirname}/index.html`) // load index.html

	// open devtools
	// win.webContents.openDevTools();

	win.on('closed', function() { win = null; })
}

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
  if (mainWindow === null) {
    createWindow()
  }
})