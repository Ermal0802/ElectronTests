const { app, BrowserWindow } = require('electron')

function createWindow() {
  let win = new BrowserWindow({
    width: 900,
    height: 900,
    webPreferences: {
      nodeIntegration: true
    }
  });
  



  win.loadFile('index.html')

  //win.webContents.openDevTools()
}

app.on('ready', createWindow)
