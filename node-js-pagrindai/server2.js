//1 uzduotis node pagrindu//
const http = require("http");
const casual = require("casual");

const servername = "127.0.0.1";
const port = 3000;
const randomNumber = Math.round(Math.random() * 10);

const server = http.createServer((req, res) => {
  // sukuria ir grazina serveri//
  res.setHeader("Content-Type", "text/plain");

  res.statusCode = 200;
  res.end(
    ` ${casual.name_suffix} ${casual.name} ${casual.last_name} ${casual.city} ${randomNumber} `
  );
});

server.listen(port, () => {
  console.log("server is running");
});
