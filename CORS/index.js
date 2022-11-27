// const http = require("http");
// const fs = require("fs");

// const PORT = 5000;
// const serverName = "127.0.0.1";
// const carList = [
//     'BMW',
//     'Porsche',
//     'Vw',
//     'Mazda'
// ]

// const server = http.createServer((req, res) => {
//   const headers = { "Content-Type": "text/html" };

//   res.writeHead(200, headers);

//   fs.readFile("./html/index.html", (error, data) => {
//     if (error) {
//       res.writeHead(404);
//       res.write("File not found");
//       return;
//     }
//     res.write(data);

//     res.end();
//   });
// });

// server.listen(
//   PORT,
//   serverName,
//   console.log(`Server is running on port ${PORT}`)
// );

const cors = require("cors");
const app = require("express")();

const carList = ["BMW", "Porsche", "Vw", "Mazda"];

const PORT = 8080;
app.use(cors());
app.get("./html/index.html", (req, res) => {
  res.status(200);
  res.send(carList);
});

app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
/* parodo kuriame porte klausyti requesto*/
