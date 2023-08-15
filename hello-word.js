console.log("hello word");
// creation de serveur
const http = require("http");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//ceration de fichier welcome.txt
var fs = require("fs");

// writeFile function with filename, content and callback function
fs.writeFile("welcome.txt", "Learn Node FS module", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
//ceration de fichier password-generator
var fs = require("fs");

// writeFile function with filename, content and callback function
fs.writeFile("password-generator", "password", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
var fs = require("fs");

// writeFile function with filename, content and callback function
fs.writeFile("email-sender", "email", function (err) {
  if (err) throw err;
  console.log("File is created successfully.");
});
