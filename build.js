const sh = require('shelljs')
const fs = require('fs')
const path = require('path')
const glob = require('glob')
const markup = require('./markup.js')

sh.rm('-rf', 'public')
sh.mkdir('-p', 'public')

// ========== build pages ==========
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

// ========== build markdown posts ==========
let frontMatters = {}
const md = require('markdown-it')()
  .use(require('markdown-it-front-matter'), fm => {
    frontMatters = fm.split('\n').reduce((acc, fm) => {
      const [ key, value ] = fm.split(': ')
      acc[key] = value
      return acc
    }, {})
  })

const posts = glob.sync('./src/posts/**/*.md')
const PostTemplate = require('./src/components/PostTemplate').default
sh.mkdir('-p', 'public/posts')
for(let post of posts) {
  const body = md.render(fs.readFileSync(post, 'utf-8'))
  if(!frontMatters.createdAt) {
    console.log('bad post: ' + post)
    continue
  }
  const content = markup([PostTemplate, { frontMatters }, [ body ]])
  const outputPath = path.join(
    'public/posts',
    frontMatters.createdAt,
    frontMatters.url
  )
  sh.mkdir('-p', outputPath)
  const outputFilePath = `${outputPath}/index.html`
  fs.writeFileSync(outputFilePath, content)
}


let result = md.render('---\ntitle: this is a title\ndesc: nope\n---\n# Heading\n---\nsome text');
// console.log(result)

sh.cp('-r', 'dist/files/*', 'public')
sh.cp('-r', 'assets/*', 'public')
sh.rm('-rf', 'dist')
