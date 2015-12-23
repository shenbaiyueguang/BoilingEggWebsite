var fs = require("fs");
var path = require("path");
var mime = require("./mime").types;

function route(pathname, request, response){
  if(pathname == '/') {pathname = "/index.html";};
  var filepath = "assets" + pathname;
  var ext = path.extname(filepath);
  ext = ext ? ext.slice(1) : 'html';
  var ContentType = mime[ext] + "; charset=UTF-8" || "text/plain; charset=UTF-8";

  fs.exists(filepath, function (exists) {

          if (!exists) {

              response.writeHead(404, {'Content-Type': 'text/plain; charset=UTF-8'});
              response.write("This request URL " + pathname + " was not found on this server.");
              response.end();

          } else {

              fs.readFile(filepath, "binary", function(err, file) {
                  if (err) {

                      response.writeHead(500, {'Content-Type': 'text/plain; charset=UTF-8'});
                      console.log(pathname);
                      response.end();

                  } else {

                      response.writeHead(200, {'Content-Type': ContentType});
                      response.write(file, "binary");
                      response.end(); 

                  }
               });
            }
      });

/*	console.log("about to route for" + path);
	if (typeof handle[path] === 'function') {
    	handle[path](request, response);
  	}
  	else {
    	console.log("No request handler found for " + path);
        response.writeHead(200,{"Content-Type":"text/plain"});
        response.write("404 NOT FOUND");
        response.end();
  	}*/
}

exports.route = route;
/*
在此处添加屏幕左侧的东西
将检测是否为function改成检测文件是否存在
然后write*/