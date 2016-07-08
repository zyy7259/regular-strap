var dom = require('dom')

describe('dataset', function () {
  it('default', function () {
    var domStr = '<div id="divDataset"></div>'
    document.body.innerHTML += domStr
    var div = document.getElementById('divDataset')
    var name = dom.dataset(div, 'name')
        // name is '', null, or undefined
    expect(!name).toBe(true)
    dom.dataset(div, 'name', 'foo')
    expect(dom.dataset(div, 'name')).toBe('foo')
    dom.remove(div)
  })
})
