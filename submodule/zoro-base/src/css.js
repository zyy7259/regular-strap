/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-03-30 16:52:45
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-03-30 16:53:44
*/

var css = {};

css.detectCSSFeature = function(featurename){
    var feature = false,
    domPrefixes = 'Webkit Moz ms O'.split(' '),
    elm = document.createElement('div'),
    featurenameCapital = null;

    featurename = featurename.toLowerCase();

    if( elm.style[featurename] !== undefined ) { feature = true; } 

    if( feature === false ) {
        featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
        for( var i = 0; i < domPrefixes.length; i++ ) {
            if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
              feature = true;
              break;
            }
        }
    }
    return feature; 
};

module.exports = css;
