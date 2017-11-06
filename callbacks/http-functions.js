module.exports = function getHTML(options, callback) {

  var https = require('https')

  https.get(options, function(response) {
    response.setEncoding('utf8')

    var buffer = ""

    response.on("data", function(chunk) {
      buffer += chunk
    })

    response.on('end', function() {
      callback(buffer) // This now allows me to call anything at the end
    })
  })
}