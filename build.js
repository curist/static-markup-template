const sh = require('shelljs')
const fs = require('fs')
const markup = require('./markup.js')

sh.mkdir('-p', 'public')

const pages = fs.readdirSync('./dist/pages').filter(f => /\.js$/.test(f))

for(let page of pages) {
  const [ name ] = page.split('.')
  if(name !== 'index') {
    fs.mkdirSync(`public/${name}`)
  }
  const outputPath = name === 'index'
    ? 'public/index.html'
    : `public/${name}/index.html`

  const Page = require(`./dist/pages/${name}.js`).default
  fs.writeFileSync(outputPath, markup(Page))
}

sh.cp('-r', 'dist/files/*', 'public')
