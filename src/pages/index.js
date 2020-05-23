import Template from '../components/Template'
import MyForm from '../components/MyForm'
import Counter from '../components/Counter'

const App = [Template, [
  ['h1', 'Hello world!'],
  MyForm,
  [Counter, { count: 10 }],
  ['div', {
    onload: function(e, el) {
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
