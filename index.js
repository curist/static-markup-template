import markup from './markup.js'

const Layout = ({ children }) => ['div', {
  class: 'my-layout',
}, children]

const MyComponent = ({ count = 0 }) => ['button', {
  class: 'my-component',
  'data-value': count,
  onclick: function(e, el) {
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



console.log(markup(MyApp))
