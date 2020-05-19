import markup from './markup.js'

const Layout = ({ children }) => ['div', {
  class: 'my-layout',
}, children]

const MyComponent = ({ count = 0 }) => ['span', {
  class: 'my-component',
  style: `
    cursor: pointer;
  `,
  onclick: function(el) {
    const count = (parseInt(el.dataset.value) || 0) + 1
    el.dataset.value = count
    el.innerHTML = 'The count is: ' + count
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
        transition: all 1s ease;
      }
      .my-component:hover {
        color: red;
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
