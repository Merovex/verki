import { app, BrowserWindow, ipcMain, Menu } from 'electron';
import { client } from 'electron-connect';
import * as path from 'path';

let applicationRef: Electron.BrowserWindow = null;

const debugMode = true;

const mainWindowSettings: Electron.BrowserWindowConstructorOptions = {
    width: 1024,
    height: 800,
    frame: true,
    resizable: false
};

function createElectronMenu() {
  var menuTemplate = [];
  menuTemplate.unshift(
     { label: 'Scribesto',
       submenu: [
           { label: `About ${app.getName()} ${app.getVersion()}`, role: 'about' },
           { label: 'Change Log'  },
           { label: 'Update'  },
           { type: 'separator' },
           { label: 'Preferences'  },
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
           { label: 'Dictonary', click() { console.log('dictionary') } },
           { label: 'Thesaurus', click() { console.log('thesaurus') } },
           { label: 'Wikipedia', click() { console.log('wikipedia') } },
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
    applicationRef = new BrowserWindow(mainWindowSettings);
    applicationRef.loadURL(`file:///${__dirname}/index.html`);
    // if (debugMode) {
    if (debugMode) {
        // Open the DevTools.
        applicationRef.webContents.openDevTools();
    }
    applicationRef.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        applicationRef = null;
    });

    initMainListener();
    createElectronMenu();
    client.create(applicationRef);
    // console.log(`${__dirname}`)
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
    if (applicationRef === null) {
        createWindow();
    }
});
