var fs = require('fs')

function index(request, response) {
  	console.log("Request handler 'index' was called.")
  	var body = fs.readFile("./index.html", "binary", function(error, file){
		if(error) {
			response.write(error + "/n")
			response.end()
		}	else {
			response.write(file, "binary")
			response.end()
		}
	})

}


exports.index = index