import fs from 'fs'
import markup from './markup.js'

async function run() {
  const pages = fs.readdirSync('./src/pages').filter(f => /\.js$/.test(f))
  for(let page of pages) {
    const [ name ] = page.split('.')
    if(name !== 'index') {
      fs.mkdirSync(`public/${name}`)
    }
    const outputPath = name === 'index'
      ? 'public/index.html'
      : `public/${name}/index.html`

    const Page = (await import(`./src/pages/${name}.js`)).default
    fs.writeFileSync(outputPath, markup(Page))
  }
}
run()

