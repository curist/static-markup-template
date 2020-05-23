const Counter = ({ count = 0 }) => ['button', {
  'data-value': count,
  onclick: function(e, el) {
    const count = (parseInt(el.dataset.value) || 0) + 1
    el.dataset.value = count
    el.innerHTML = 'The count is: ' + count
  },
}, 'The count is: ' + count]

export default Counter
