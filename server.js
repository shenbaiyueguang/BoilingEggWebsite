var http = require("http");
var url = require("url");

function start(route, handle){

    function onRequest(request, response){
        var postData = '';
        var path = url.parse(request.url).pathname;
        route(handle, path, request, response)
    }
    http.createServer(onRequest).listen(8888);

    console.log("Server has started.");
}

exports.start = start