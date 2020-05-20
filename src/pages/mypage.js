import Template from '../components/Template.js'

export default () => [Template, [
  ['h1', 'My Second Page'],
  'and some content',
  ['form', {
    onsubmit: function(e, el) {
      e.preventDefault()
      const $input = el.querySelector('[name=code]')
      const $message = el.querySelector('.message')
      $message.innerHTML = $input.value

      clearTimeout(el.dataset.timeout)
      el.dataset.timeout = setTimeout(function() {
        $message.innerHTML = ''
      }, 3000)
    },
  }, [
    ['style', {
      onload: (e, el) => console.log(e, el.parentNode),
    }],
    ['input', {
      name: 'code',
      placeholder: 'code',
    }],
    ['input', { type: 'submit' }],
    ['div', { class: 'message' }],
  ]],
]]
