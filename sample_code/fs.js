const fs = require("fs");
const http = require("http");

serveFile("../index.html");

function serveFile(fileName) {
  const server = http.createServer(function (req, res) {
    const theHtml = fs.readFileSync(fileName, "utf8");
    console.log("file was served.");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(theHtml);
    res.end();
  });

  server.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
}
