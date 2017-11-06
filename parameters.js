var https = require('https')

var url = 'sytantris.github.io/http-examples/step3.html'

function getAndPrintHTML(options) {

  https.get(options, function(response) {
    response.setEncoding("utf8")
    console.log("Response Code: " + response.statusCode)

    var buffer = ""

    response.on("data", function(chunk) {
      console.log("GOT DATA")
      console.log("Chunk: " + chunk)
      buffer += chunk
    })

    response.on('end', function() {
      console.log('buffer')

    })
  })
}



var requestOptions = {
  // host: process.argv.slice(2)[0],
  // path: process.argv.slice(2)[1]
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)