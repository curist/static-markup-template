import markup from './markup.js'

const Layout = ({ children }) => ['div', {
  class: 'my-layout',
}, children]

const MyComponent = ({ count }) => ['span', 'The count is: ' + count]

const MyApp = () => ['html', [
  ['head', [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['style', `
      .my-component {
        color: black;
      }
    `],
    ['title', 'my site'],
  ]],
  ['body', [
    [Layout, [
      'text', 'bar',
      ['div', 'foo'],
      'text',
      ['div', 'bar'],
      'text content',
    ]],
    [MyComponent, { count: 10 }],
    ['script', `
      console.log('yoyo!!')
    `],
  ]],
]]


console.log(markup([MyApp]))
