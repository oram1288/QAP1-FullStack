const http = require("http");

serveHtml("<h1>Hello, this is my Http file for QAP1 in FullStack</h1>");

function serveHtml(theHtml) {
  const server = http.createServer(function (req, res) {
    console.log(req.url);
    console.log("html was served.");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(theHtml);
    res.end();
  });

  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
