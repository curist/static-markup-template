import Layout from './components/Layout.js'
import MyForm from './components/MyForm.js'
import MyComponent from './components/MyComponent.js'

const App = () => ['html', [
  ['head', [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico',
    }],
    ['link', {
      rel: 'stylesheet',
      // href: 'https://unpkg.com/sakura.css/css/sakura.css',
      href: 'https://newcss.net/new.min.css',
    }],
    ['title', 'my site'],
  ]],
  ['body', [
    ['h1', 'Hello world!'],
    MyForm,
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

export default App
