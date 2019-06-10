# lor-panel
React panel for LINUX.ORG.RU "mouse navigation"

## Features
* quick navigation to tracker, development, talks and notifications page;
* autoscroll to last read comment

![alt text](https://github.com/unreg/lor-panel/blob/master/screenshots/Screenshot_20190610_215600.png)

## Get source
```git clone https://github.com/unreg/lor-panel/ ```

## Build
```
cd lor-panel
yarn
yarn build
```

## Prepare to deploy
* Rename `./build/static/js/main.*.js.map` to `./build/static/js/main.js.map`
* Rename `./build/static/js/main.*.js` to `./build/static/js/main.js`

## Trying it out in Firefox
Open "about:debugging", click "Load Temporary Add-on" and select any file in your extension's directory `./build`.

## Trying it out in Chrome
Open "chrome://extensions", click "Load unpacked extension..." and select your extension's directory `./build`.

## Firefox Add-ons page
https://addons.mozilla.org/en-US/firefox/addon/lor-react-panel/

## Delete extension data
Remove from browser local storage "https://www.linux.org.ru" item with "persist:root" key.
