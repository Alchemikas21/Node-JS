const http = require("http");
const fs = require("fs");

const PORT = 5000;
const serverName = "127.0.0.1";

const server = http.createServer((req, res) => {
  const headers = { "Content-Type": "text/html" };

  res.writeHead(200, headers);

  fs.readFile("./views/index.html", (error, data) => {
    //file system(fs) naudoja metoda skaityti faila nurodytame path
    if (error) {
      res.writeHead(404);
      res.write("File not found");
      return;
    }
    res.write(data);

    res.end();
  });
});

server.listen(
  PORT,
  serverName,
  console.log(`Server is running on port ${PORT}`)
);
