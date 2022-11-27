const http = require("http");
const PORT = 3_000;
const servername = "127.0.0.1";
const randomNumber = Math.round(Math.random());

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  const endpoint = req.url;
  let responseBody = null;

  switch (endpoint) {
    case "/randomNumber":
      responseBody = `${Math.random() * 15}`;
      break;

    case "/cars":
      responseBody = JSON.stringify(["tesla", "BMW", "Porsche"]);
      break;

    default:
      responseBody =
        "kreipkites i atpazinima endpointa. (/cars, /randomNumber)";
      break;
  }
  res.statusCode = 200;
  res.end(responseBody);
});

server.listen(PORT, servername, () => {
  console.log("server is running");
});
