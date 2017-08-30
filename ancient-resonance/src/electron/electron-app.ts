import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import { client } from 'electron-connect';
import * as path from 'path';

let win: Electron.BrowserWindow = null;

const debugMode = true;

const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
    width: 1024,
    height: 800,
    frame: true,
    resizable: true,
    webPreferences: {
      textAreasAreResizable: false
    },
};
function oExt(url: string) {
  require('electron').shell.openExternal(url)
}
function getSelectionText() {
  win.webContents.send('getSelectionText', '');
}
function createElectronMenu() {
  var menuTemplate = [];
  menuTemplate.unshift(
     { label: 'Scribesto',
       submenu: [
           { label: `About ${app.getName()} ${app.getVersion()}`, role: 'about' },
           { label: 'Change Log'  },
           { label: 'Update'  },
           { type: 'separator' },
           { label: 'Preferences', accelerator: 'CmdOrCtrl+,' },
           { type: 'separator' },
           { role: 'quit' },
       ],
     },
     { label: 'File',
       submenu: [
           { label: 'New Project' },
           { label: 'Open Project' },
           { label: 'Recent Projects' },
           { type: 'separator' },
           { label: 'Close Project' },
           { label: 'Close All' },
           { label: 'Save' },
           { label: 'Save As' },
       ],
     },
     { label: 'Edit',
       submenu: [
           { role: 'undo'  },
           { role: 'redo'  },
           { type: 'separator'},
           { role: 'cut'  },
           { role: 'copy'  },
           { role: 'paste'  },
           { type: 'separator'},
          //  { label: 'Dictonary', click() { oExt(`http://www.dictionary.com/browse/${getSelectionText()}`) } },
           { label: 'Dictionary', click() { win.webContents.send('getSelectionText', 'http://www.dictionary.com/browse/') } },
           { label: 'Thesaurus', click() { win.webContents.send('getSelectionText', 'http://www.thesaurus.com/browse/') } },
           { label: 'Wikipedia', click() { win.webContents.send('getSelectionText', 'https://en.wikipedia.org/w/index.php?search=') } },
           { type: 'separator'},
           { label: 'Find',
             submenu: [
               { label: 'Find'  },
               { label: 'Find Next'  },
               { label: 'Find Previous'  },
             ]
           }
       ],
     },
     { label: 'Project',
       submenu: [
           { label: 'New Text' },
           { label: 'New Collection' },
           { label: 'New from Template' },
           { type: 'separator' },
           { label: 'Project Metadata' },
           { label: 'Project Statistics' },
           { label: 'Text Statistics' },
           { label: 'Project Statistics' },
       ],
     },
     { label: 'View',
        submenu: [
          {role: 'reload'},
          {role: 'forcereload'},
          {role: 'toggledevtools'},
          {type: 'separator'},
          {role: 'resetzoom'},
          {role: 'zoomin'},
          {role: 'zoomout'},
          {type: 'separator'},
          {role: 'togglefullscreen'}
        ]
     },
     { label: 'Help',
       submenu: [
           { label: 'Search' },
           { type: 'separator' },
           { label: 'Documentation' },
           { label: 'Tutorials' },
           { label: 'Community' },
           { label: 'Report Flaw' },
           { type: 'separator' },
           { label: 'Acknowledgements' },
           { type: 'separator' },
           { label: `Welcome to ${app.getName()}` },
           { label: 'Register / Remove License'  },
       ],
     }
  );
  if (process.platform === 'darwin') {
    // Edit menu
    menuTemplate[2].submenu.push(
      {type: 'separator'},
      { label: 'Speech',
        submenu: [
          {role: 'startspeaking'},
          {role: 'stopspeaking'}
      ]}
    );
  }

  var menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);
}

function initMainListener() {
    ipcMain.on('ELECTRON_BRIDGE_HOST', (event, msg) => {
        console.log('msg received', msg);
        if (msg === 'ping') {
            event.sender.send('ELECTRON_BRIDGE_CLIENT', 'pong');
        }
    });
}

function createWindow() {
    win = new BrowserWindow(mainWindowSettings);
    win.loadURL(`file:///${__dirname}/index.html`);
    win.webContents.openDevTools()
    if (debugMode) {
        // Open the DevTools.
        win.webContents.openDevTools();
    }
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null;
    });

    initMainListener();
    createElectronMenu();
    client.create(win);
}


app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        // TODO perhaps hook this and wait for message bus before quitting?
        app.quit();
    }
});

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
        createWindow();
    }
});
ipcMain.on('selected-text', function(e, arg) {
  oExt(arg.msg)
});
