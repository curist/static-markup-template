import Template from 'src/components/Template'

export default () => [Template, [
  ['h1', 'My Second Page'],
  'and some content',
  ['form', {
    onload: function(e, el) {
      console.log(el)
      console.log('form loaded')
    },
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
    ['input', {
      name: 'code',
      placeholder: 'code',
    }],
    ['input', { type: 'submit' }],
    ['div', { class: 'message' }],
  ]],
]]
