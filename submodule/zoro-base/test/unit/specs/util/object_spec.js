/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-01-07 22:17:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 12:00:24
*/

var util = require('util');

describe('util object related', function() {
    it('merge', function() {
        var foo = {
            a: 0
        };
        var bar = {};
        var baz = {};
        var obj = util.merge({}, foo);
        expect(obj).toEqual(foo);
    });
    it('fetch', function() {
        var foo = {
            a: 0,
            b: 1,
            c: 2,
        };
        var bar = {
            a: 'a',
            b: 'b',
            d: 'd'
        };
        var baz = {
            a: 'a',
            b: 'b',
            c: 2
        };
        expect(util.fetch(foo, bar)).toEqual(baz);
    });
    it('string2object', function() {
        var str = '';
        expect(util.string2object(str)).toEqual({});
        str = 'a=1';
        expect(util.string2object(str)).toEqual({a:'1'});
        str = 'a=1&b=2';
        expect(util.string2object(str, '&')).toEqual({a:'1',b:'2'});
    });
    it('object2string', function() {
        var obj = {
            k1: 'v1',
            k2: 2
        };
        expect(util.object2string(obj)).toBe('k1=v1,k2=2');
        expect(util.object2string(obj,'/')).toBe('k1=v1/k2=2');
    });
    it('checkWithDefault', function() {
        var initialValue = 'value';
        var obj = {
            key: initialValue
        };
        var value = util.checkWithDefault(obj, 'key', 'dft');
        expect(value).toBe(initialValue);
        value = util.checkWithDefault(obj, 'KEY', 'dft');
        expect(value).toBe(initialValue);
        value = util.checkWithDefault(obj, 'k', 'v');
        expect(value).toBe('v');
    });
    it('simpleClone', function () {
      var obj = {
        name: 'foo'
      }
      var objc = util.simpleClone(obj)
      expect(obj).not.toBe(objc)
      expect(obj).toEqual(objc)
    })
    it('fillUndef', function () {
      var obj = {
        key1: 'aaa',
        key2: null
      }
      var dft = {
        key1: '111',
        key2: '222',
        key3: '333'
      }
      util.fillUndef(obj, dft)
      expect(obj).toEqual({
        key1: 'aaa',
        key2: null,
        key3: '333'
      })
    })
});
