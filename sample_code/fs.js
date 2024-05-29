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

// FS
// The Node.js file system module allows you to work with the file system on your computer.
// To include the File System module, use the require() method. The fs.readFile() method is
// used to read files on your computer like (fd, buffer, length, etc.). Many more methods
// include creating, updating, replace, delete, and rename.
