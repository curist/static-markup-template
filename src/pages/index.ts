import Template from 'src/components/Template'
import MyForm from 'src/components/MyForm'
import Counter from 'src/components/Counter'

const App = [Template, [
  ['h1', 'Hello world!'],
  MyForm,
  [Counter, { count: 10 }],
  ['div', {
    onload: <Handler>function(e, el) {
      setTimeout(function() {
        const { now } = libs
        el.innerHTML = now()
      }, 2000)
    },
  }, 'some content...'],
  'kk',
  Counter,
  ['script', `
    console.log('yoyo!!')
  `],
]]

export default App
