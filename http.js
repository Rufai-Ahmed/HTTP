const http = require("http");

const PORT = 2000;

const app = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("server is up and flying (❁´◡`❁)");
  res.end();
});
app.listen(PORT, () => {
  console.log("Port is up and flying");
});

const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.write("........................");
  response.end();
});
server.listen(1000, () => {
  console.log("Run");
});

const serve = http.createServer((req, res) => {
  res.writeHead(200);
  res.write("Running...");
  res.end();
});
serve.listen(1200, () => {
  console.log("Run");
});

const serving = http.createServer((req, res) => {
  res.writeHead(300);
  res.write("Time up...");
  res.end();
});

serving.listen(1400, () => {
  console.log("Run");
});

const swerve = http.createServer((req, res) => {
  res.writeHead(500);
  res.write("urrnrierio");
  res.end();
});
swerve.listen(1500, () => {
  console.log("Run");
});
