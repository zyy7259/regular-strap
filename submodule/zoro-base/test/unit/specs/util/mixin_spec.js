var util = require('util')
var mixin = require('util/mixin')

describe('mixin', function () {
  it('default', function () {
    var foo = {}
    var bar = {
      key: 'value'
    }
    mixin(foo, bar)
    expect(foo).toEqual(jasmine.objectContaining({
      key: 'value'
    }))
  })
})
