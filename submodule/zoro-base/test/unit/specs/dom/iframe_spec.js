var dom = require('dom')

var http = location.protocol === 'http:'
var src1 = http ? 'http://www.163.com/' : 'https://www.baidu.com/'
var src2 = http ? 'http://mail.163.com/' : 'https://github.com/'

xdescribe('iframe', function () {
  describe('createIframe', function () {
    it('empty options', function (done) {
      var iframe = dom.createIframe()
      expect(iframe.name).toEqual('')
      expect(+iframe.frameBorder).toEqual(0)
      expect(iframe.style.display).toEqual('none')
      setTimeout(function () {
        expect(iframe.src).toEqual('about:blank')
        done()
      }, 10)
    })
    it('name', function () {
      var options = {
        name: 'foo'
      }
      var iframe = dom.createIframe(options)
      expect(iframe.name).toEqual('foo')
    })
    it('visible', function () {
      var options = {
        visible: true
      }
      var iframe = dom.createIframe(options)
      expect(iframe.style.display).not.toEqual('none')
    })
    it('src', function (done) {
      var options = {
        src: src1
      }
      var iframe = dom.createIframe(options)
      setTimeout(function () {
        expect(iframe.src).toEqual(src1)
        done()
      }, 10)
    })
  })

  describe('onload related', function () {
    var onload
    var options
    var iframe
    beforeEach(function () {
      onload = jasmine.createSpy('onload')
      options = {
        onload: onload
      }
    })
    it('onload', function (done) {
      iframe = dom.createIframe(options)
      setTimeout(function () {
        expect(onload.calls.count()).toEqual(1)
        iframe.src = src1
        setTimeout(function () {
          expect(onload.calls.count()).toEqual(1)
          done()
        }, 2000)
      }, 1000)
    })
    it('multi onload', function (done) {
      options.multi = true
      iframe = dom.createIframe(options)
      setTimeout(function () {
        expect(onload.calls.count()).toEqual(1)
        iframe.src = src1
        setTimeout(function () {
          expect(onload.calls.count()).toEqual(2)
          done()
        }, 2000)
      }, 1000)
    })
  })
})
