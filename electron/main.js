const { app, Menu, Tray, BrowserWindow } = require("electron");

const path = require("path");
const url = require("url");

const ROOT = path.join(__dirname, "/../");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;
let tray;

function createWindow() {
  const { screen } = require("electron");
  let display = screen.getPrimaryDisplay();
  let width = display.bounds.width;
  // Create the browser window.
  win = new BrowserWindow({
    y: 0,
    x: width - 200,
    width: 200,
    height: 54,
    minWidth: 100,
    minHeight: 54,
    alwaysOnTop: true,
    frame: false,
    icon: path.join(ROOT, "/public/macos/AppIcon.icns"),
    title: "DotaPin",
    transparent: true,
    skipTaskbar: true
  });

  app.dock.hide();
  // "floating" + 1 is higher than all regular windows, but still behind things
  // like spotlight or the screen saver
  win.setAlwaysOnTop(true, "normal", 9999);
  // allows the window to show over a fullscreen window
  win.setVisibleOnAllWorkspaces(true);

  // win = new BrowserWindow({transparent: true, width: 800, height: 600,frame: false,fullscreen:true, alwaysOnTop:true,skipTaskbar: true})
  // win.setIgnoreMouseEvents(true)
  // win.setPosition(width - 200, 0);

  const startUrl =
    process.env.ELECTRON_START_URL ||
    url.format({
      pathname: path.join(ROOT, "/build/index.html"),
      protocol: "file:",
      slashes: true
    });
  win.loadURL(startUrl);

  // Emitted when the window is closed.
  win.on("closed", () => {
    win = null;
  });
}

function createTray() {
  // Create context menu for tray

  /* game modes for future usage
  { label: "game mode - normal", type: "radio" },
  { label: "game mode - rank", type: "radio" },
  { label: "game mode - turbo", type: "radio", checked: true }
  */
  const contextMenu = Menu.buildFromTemplate([
    {
      role: "quit",
      accelerator: "Cmd+Q"
    }
  ]);
  // Create the tray
  tray = new Tray(path.join(ROOT, "/public/mac-tray-icon.png"));
  tray.setToolTip("DotaPin");
  tray.setContextMenu(contextMenu);
}

app.on("ready", () => {
  createWindow();
  createTray();
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
