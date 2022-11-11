const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to home page");
  }

  if (req.url === "/about") {
    res.end("welcome to about page");
  }

  res.end(`
    <h1>Oops!</h1>
    <p>Cannot find page</p>
    <a href="/">Go Back</a>
    `);
});

server.listen(5000);
