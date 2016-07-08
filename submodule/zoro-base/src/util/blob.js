var util = require('./index')

util.blobFromDataURL = function (dataURL) {
    // convert base64/URLEncoded data component to raw binary data held in a string
  var byteString
  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
    byteString = window.atob(dataURL.split(',')[1])
  } else {
    byteString = window.decodeURIComponent(dataURL.split(',')[1])
  }

    // separate out the mime component
  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]

    // write the bytes of the string to a typed array
  var ia = new window.Uint8Array(byteString.length)
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }

  return new window.Blob([ia], {type: mimeString})
}
