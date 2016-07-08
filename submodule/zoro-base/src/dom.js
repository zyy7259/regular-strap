var util = require('./util')

var dom = {}

dom.remove = function (node) {
  if (!!node.parentNode) {
    node.parentNode.removeChild(node)
  }
}

dom.dataset = function (node, key, value) {
  if (util.exist(value)) {
    node.setAttribute('data-' + key, value)
  } else {
    return node.getAttribute('data-' + key)
  }
}

dom.on = dom.addEventListener = function (node, type, callback) {
  if (node.addEventListener) {
    node.addEventListener(type, callback, false)
  } else if (node.attachEvent) {
    node.attachEvent('on' + type, callback)
  }
}

dom.off = dom.removeEventListener = function (node, type, callback) {
  if (node.removeEventListener) {
    node.removeEventListener(type, callback, false)
  } else if (node.detachEvent) {
    node.detachEvent('on' + type, callback)
  }
}

dom.target = function (event) {
  return event.target || event.srcElement
}

// TODO untest
dom.html2node = function (html) {
  var div = window.document.createElement('div')
  div.innerHTML = html
  var children = [],
    i,
    l
  if (!!div.children) {
    for (i = 0, l = div.children.length; i < l; i++) {
      children.push(div.children[i])
    }
  } else {
    for (i = 0, l = div.childNodes.length; i < l; i++) {
      var child = div.childNodes[i]
      if (child.nodeType === 1) {
        children.push(child)
      }
    }
  }
  return children.length > 1 ? div : children[0]
}

dom.createIframe = function (options) {
  options = options || {}
  var iframe = document.createElement('iframe')
  iframe.frameBorder = 0
  if (options.name) {
    iframe.name = options.name
  }
  if (!options.visible) {
    iframe.style.display = 'none'
  }
  if (util.isFunction(options.onload)) {
    var onIframeLoad = function (event) {
      if (!iframe.src) {
        return
      }
      if (!options.multi) {
        dom.off(iframe, 'load', onIframeLoad)
      }
      options.onload(event)
    }
    dom.on(iframe, 'load', onIframeLoad)
  }
    // will trigger onload
  var parent = options.parent;
  (parent || document.body).appendChild(iframe)
    // ensure trigger onload async
  var src = options.src || 'about:blank'
  setTimeout(function () {
    iframe.src = src
  }, 0)
  return iframe
}

module.exports = dom
