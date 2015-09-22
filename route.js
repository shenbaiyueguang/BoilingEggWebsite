function route(handle, path, request, response){
	console.log("about to route for" + path);
	if (typeof handle[path] === 'function') {
    	handle[path](request, response);
  	}
  	else {
    	console.log("No request handler found for " + path);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("404 NOT FOUND");
        response.end();
  	}
}

exports.route = route;