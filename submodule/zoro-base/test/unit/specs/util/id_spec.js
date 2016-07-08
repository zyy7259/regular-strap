var util = require('util')

describe('util id related', function () {
  it('uniqueID', function () {
    for (var i = 0; i < 10; i++) {
      expect(util.uniqueID()).toBe('' + i)
    }
  })
})
