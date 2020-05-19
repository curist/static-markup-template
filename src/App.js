import Layout from './components/Layout.js'
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
    ['form', {
      onsubmit: (e, el) => {
        e.preventDefault()
        const input = el.querySelector('[name=username]')
        alert(input.value)
      },
    }, [
      ['input', {
        required: true,
        name: 'username',
        placeholder: 'Your name',
      }],
      ['input', { type: 'submit' }],
    ]],
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
