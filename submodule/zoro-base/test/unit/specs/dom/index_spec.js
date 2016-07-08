var dom = require('dom')

describe('dom', function () {
  it('remove', function () {
    var domStr = '<div id="divRemove"></div>'
    document.body.innerHTML += domStr
    var div = document.getElementById('divRemove')
    expect(div.parentNode).toEqual(jasmine.anything())
    dom.remove(div)
        // is null or undefined
    expect(div.parentNode == null).toBe(true)
  })
})
