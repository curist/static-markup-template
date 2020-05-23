`markup.js` is the lib.

`build.js` build `src/pages/*.js` as pages.

everything under `assets/` will be copied to `public/`. 

styles are in [linaria](https://github.com/callstack/linaria), and will be collected as `/styles.css` by `webpack`.

JS libraries should be exported in `src/browser.js`, and can be accessed as `libs.*` in browser.

