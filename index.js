//index
var server = require("./server");
var route = require("./route");
var requestHandler = require("./requestHandler");

/*var handle = {}
handle["/"] = requestHandler.index;
handle["/index"] = requestHandler.index;*/

server.start(route.route/*, handle*/);