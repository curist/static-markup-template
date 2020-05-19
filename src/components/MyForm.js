const FieldSet = () => ['fieldset', [
  ['legend', 'My Form:'],
  ['input', {
    required: true,
    name: 'username',
    placeholder: 'Your name',
  }],
  ['input', { type: 'submit' }],
]]

const MyForm = ['form', {
  onsubmit: (e, el) => {
    e.preventDefault()
    const input = el.querySelector('[name=username]')
    alert(input.value)
  },
}, FieldSet]

export default MyForm
