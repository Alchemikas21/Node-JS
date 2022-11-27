const http = require("http");

const servername = "127.0.0.1"; //lokalaus kompiuterio IP//
const port = 3000; // portai naudojami nuo 3000 iki 5000//
const randomNumber = Math.round(Math.random());

const server = http.createServer((req, res) => {
  // sukuria ir grazina serveri//
  res.setHeader("Content-Type", "text/plain");

  if (randomNumber) {
    // jei atsitiktinis skaicius 1, tada kalida
    res.statusCode = 403;
    res.end("Error!");
  }

});

server.listen(port, () => {
  console.log("server is running");
});
