var http = require('http');
var fs = require('fs');
var url = require('url');

/* Creating server */
http.createServer( function (request, response){
	/* Parse url */
	var pathname = url.parse(request.url).pathname;
	  // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Handle AJAX Request
   if(pathname == "/handleRequest")
   {
	   console.log("Button Clicked by client");
	   response.writeHead(200, {'Content-Type': 'text/html'});
	   response.end();
   }
   else 
   {
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      // Send the response body 
      response.end();
   });   
   }
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
