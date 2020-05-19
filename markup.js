const repeat = (n = 0, c = '  ') => {
  return Array.from({ length: n + 1 }).join(c)
}

const randomFunctionName = () => '_' + Math.random().toString(16).slice(-6)

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
function markup(tags, indent = 0, context = {}) {
  if(typeof tags === 'function') {
    return markup([tags], indent, context)
  }

  let [tag, attrs, children] = tags

  if(typeof attrs === 'object' && !Array.isArray(attrs)) {
    // attrs is attrs
  } else {
    // attrs is children
    children = attrs
    attrs = {}
  }

  if(typeof tag === 'function') {
    return markup(tag({ ...attrs, children }), indent, context)
  }

  context.fns = context.fns || {}
  const fns = {}

  const attrPairs = Object.entries(attrs)
  const attrsRendered = attrPairs.length === 0 ? '' :
    ' ' + attrPairs.map(([k, v]) => {
      if(typeof v === 'boolean' && v) {
        return k
      }
      if(typeof v === 'function') {
        const fnString = v.toString()
        const existingFnName = context.fns[fnString]
        const fnName = existingFnName || randomFunctionName()
        if(!existingFnName) {
          fns[fnString] = fnName
        }
        return `${k}="${fnName}(event,this)"`
      }
      return `${k}="${v}"`
    }).join(' ')

  let result = ''

  const fnPairs = Object.entries(fns)
  if(fnPairs.length > 0) {
    result += repeat(indent) + '<script>\n'
    fnPairs.forEach(([fnBody, fnName]) => {
      result += repeat(indent + 1) + `var ${fnName} = ${fnBody};\n`
    })
    result += repeat(indent) + '</script>\n'
    context.fns = {
      ...context.fns,
      ...fns,
    }
  }

  result += repeat(indent) + `<${tag}${attrsRendered}>`

  const childrenArr = !children ? []
    : Array.isArray(children) ? children : [children]

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

  for(let child of childrenArr) {
    if(isTextNode(child)) {
      if(shouldLinebreak) {
        result += repeat(indent + 1)
      }
      result += child
    } else {
      result += markup(child, indent + 1, context)
    }
    if(shouldLinebreak) {
      result += '\n'
    }
  }

  if(shouldLinebreak) {
    result += repeat(indent)
  }

  if(!selfClosingTag.has(tag)) {
    result += `</${tag}>`
  }

  return result
}

export default markup

