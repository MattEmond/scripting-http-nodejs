var https = require("https")



function getAndPrintHTML () {

  var requestOptions = {
    host: "sytantris.github.io",
    path: "/http-examples/step2.html"
  };

  https.get(requestOptions, function(response) {
    response.setEncoding("utf8");

    var buffer = ''

    response.on('data', function(data) {
      buffer += data
      console.log(buffer)
    })

    response.on('end', function() {
      console.log('Final output ' + buffer)
    })
  })

}

getAndPrintHTML()