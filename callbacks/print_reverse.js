var getHTML = require('./http-functions')

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/reverse.html'
};

function printReverse(html) {
  var split = html.split("")
  var reverse = split.reverse()
  var join = reverse.join("")
  console.log(join)
}

getHTML(requestOptions, printReverse)