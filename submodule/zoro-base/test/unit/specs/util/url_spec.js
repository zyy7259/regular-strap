var util = require('util')

describe('util url related', function () {
  it('genUrlSep', function () {
    var url = 'https://www.baidu.com/'
    expect(util.genUrlSep(url)).toBe('?')
    url = 'https://www.baidu.com/?k=v'
    expect(util.genUrlSep(url)).toBe('&')
  })
  it('object2query', function () {
    var obj = {
      k1: 'v1',
      k2: 2
    }
    var str = 'k1=v1&k2=2'
    expect(util.object2query(obj)).toBe(str)
  })
  it('url2origin', function () {
    var url = 'http://www.baidu.com/'
    expect(util.url2origin(url)).toBe('http://www.baidu.com')
    url = 'http://www.baidu.com'
    expect(util.url2origin(url)).toBe('http://www.baidu.com')
    url = 'http://www.baidu.com:8080/'
    expect(util.url2origin(url)).toBe('http://www.baidu.com:8080')
    url = 'http://www.baidu.com:8080'
    expect(util.url2origin(url)).toBe('http://www.baidu.com:8080')

    url = 'https://www.baidu.com/'
    expect(util.url2origin(url)).toBe('https://www.baidu.com')
    url = 'https://www.baidu.com'
    expect(util.url2origin(url)).toBe('https://www.baidu.com')
    url = 'https://www.baidu.com:8080/'
    expect(util.url2origin(url)).toBe('https://www.baidu.com:8080')
    url = 'https://www.baidu.com:8080'
    expect(util.url2origin(url)).toBe('https://www.baidu.com:8080')
  })
})
