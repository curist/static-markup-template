import Template from '../components/Template.js'
import MyForm from '../components/MyForm.js'
import MyComponent from '../components/MyComponent.js'

const App = [Template, [
  ['h1', 'Hello world!'],
  MyForm,
  [MyComponent, { count: 10 }],
  'kk',
  MyComponent,
  ['script', `
    console.log('yoyo!!')
  `],
]]

export default App
