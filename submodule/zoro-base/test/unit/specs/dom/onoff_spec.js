var dom = require('dom')

describe('on/off', function () {
  var cb
  var body = document.body
  beforeEach(function () {
    cb = jasmine.createSpy('cb')
    dom.on(body, 'click', cb)
  })
  afterEach(function () {
    dom.off(body, 'click', cb)
  })
  it('on', function () {
    body.click()
    expect(cb).toHaveBeenCalled()
  })
  it('multi', function () {
    expect(cb.calls.count()).toEqual(0)
    body.click()
    expect(cb.calls.count()).toEqual(1)
    body.click()
    expect(cb.calls.count()).toBe(2)
  })
  it('off', function () {
    body.click()
    expect(cb.calls.count()).toEqual(1)
    dom.off(body, 'click', cb)
    body.click()
    expect(cb.calls.count()).toBe(1)
  })
})
