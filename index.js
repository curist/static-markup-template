import markup from './markup.js'

const Layout = ({ children }) => ['div', {
  class: 'my-layout',
}, children]

const MyComponent = ({ count = 0 }) => ['span', {
  class: 'my-component',
  onclick: function() {
    console.log('clicked')
  },
}, 'The count is: ' + count]

const MyApp = () => ['html', [
  ['head', [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://unpkg.com/sakura.css/css/sakura.css',
      type: 'text/css',
    }],
    ['style', `
      .my-component {
        color: navy;
      }
    `],
    ['title', 'my site'],
  ]],
  ['body', [
    ['h1', 'Hello world!'],
    [Layout, [
      'text', 'bar',
      ['div', 'foo'],
      'text',
      ['div', 'bar'],
      'text content',
    ]],
    [MyComponent, { count: 10 }],
    'kk',
    MyComponent,
    ['script', `
      console.log('yoyo!!')
    `],
  ]],
]]



console.log(markup(MyApp))
