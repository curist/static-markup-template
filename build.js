const sh = require('shelljs')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const markup = require('./markup.js')

sh.rm('-rf', 'public')
sh.mkdir('-p', 'public')

const pages = glob.sync('./dist/pages/**/*.js')

for(let page of pages) {
  const [ fullPath ] = page.replace('./dist/pages/', '').split('.')
  const [ fileName ] = fullPath.split('/').slice(-1)
  const partialPath = fullPath.split('/').slice(0, -1).join('/')

  const outputPath = fileName === 'index'
    ? partialPath
    : path.join(partialPath, fileName)

  if(outputPath) {
    sh.mkdir('-p', path.join('public', outputPath))
  }

  const outputFilePath = path.join(
    'public', partialPath,
    fileName === 'index' ? '' : fileName,
    'index.html'
  )

  const Page = require(page).default
  fs.writeFileSync(outputFilePath, markup(Page))
}

sh.cp('-r', 'dist/files/*', 'public')
sh.cp('-r', 'assets/*', 'public')
sh.rm('-rf', 'dist')
