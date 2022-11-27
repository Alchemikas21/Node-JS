const http = require("http");

const port = 3_000;
const servername = "127.0.0.1";
const randomNumber = Math.round(Math.random());

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  if (randomNumber) {
    res.statusCode = 200;
    res.end("puikus vakaras");
  }

  res.statusCode = 200;
  res.end("hello");
});

server.listen(port, servername, () => {
  console.log(`"server is running" ${randomNumber}`);
});
