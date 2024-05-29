const http = require("http");

serveHtml("<h1>Hello, this is my Http file for QAP1 in FullStack</h1>");

function serveHtml(theHtml) {
  // Create Server
  const server = http.createServer(function (req, res) {
    console.log(req.url);
    console.log("html was served.");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(theHtml);
    res.end();
  });

  // Server listening on port 3000
  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}

// HTTP:
// The HTTP module can create an HTTP server that listens to server ports and
// gives a response back to the client. Use the createServer() method to create
// an HTTP server. The function passed into the http.createServer() method, will
// be executed when you try to access the computer on port 3000.
