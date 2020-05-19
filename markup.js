const repeat = (n = 0, c = '  ') => {
  return Array.from({ length: n + 1 }).join(c)
}

const isTextNode = el => {
  const type = typeof el
  return type === 'string' || type === 'number'
}

const selfClosingTag = new Set([
  'area', 'base', 'br', 'col',
  'command', 'embed', 'hr', 'img',
  'input', 'keygen', 'link', 'menuitem',
  'meta', 'param', 'source', 'track', 'wbr',
])

// usage:
//   [tag]
//   [tag, {}]
//   [tag, '']
//   [tag, []]
//   [tag, {}, '']
//   [tag, {}, []]
function markup(tags, indent = 0) {
  if(typeof tags === 'function') {
    return markup([tags], indent)
  }
  let [tag, attrs, children] = tags
  if(typeof attrs === 'object' && !Array.isArray(attrs)) {
    // attrs is attrs
  } else {
    // attrs is children
    children = attrs
    attrs = {}
  }

  const childrenArr = !children ? []
    : Array.isArray(children) ? children : [children]

  if(typeof tag === 'function') {
    return markup(tag({ ...attrs, children }), indent)
  }
  const attrPairs = Object.entries(attrs)
  const attrsRendered = attrPairs.length === 0 ? '' :
    ' ' + attrPairs.map(([k, v]) => `${k}="${v}"`).join(' ')

  let result = repeat(indent) + `<${tag}${attrsRendered}>`

  // if has only one text content chlidren or no children,
  // we don't linebreak
  const shouldLinebreak = !(
    childrenArr.length === 0
    || childrenArr.length === 1
    && isTextNode(childrenArr[0])
  )

  if(shouldLinebreak) {
    result += '\n'
  }

  childrenArr.forEach(child => {
    if(isTextNode(child)) {
      if(shouldLinebreak) {
        result += repeat(indent + 1)
      }
      result += child
    } else {
      result += markup(child, indent + 1)
    }
    if(shouldLinebreak) {
      result += '\n'
    }
  })
  if(shouldLinebreak) {
    result += repeat(indent)
  }
  if(!selfClosingTag.has(tag)) {
    result += `</${tag}>`
  }
  return result
}

export default markup

