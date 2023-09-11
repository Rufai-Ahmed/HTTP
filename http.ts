// import http, { IncomingMessage, ServerResponse } from "http";

// const port: number = 5000;

// const server = http.createServer(
//   (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
//     res.writeHead(200);
//     res.write("Running using TS");
//     res.end();
//   }
// );

const port: number = 2000;

import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    req.statusCode = 200;
    let connect = "site/";

    switch (req.url) {
      case "/":
        connect += "Home.html";
        res.statusCode = 200;
        break;

      case "/about":
        connect += "About.html";
        res.statusCode = 200;
        break;

      case "/contact":
        connect += "Contact.html";
        res.statusCode = 200;
        break;

      case "/order":
        connect += "Contact.html";
        res.statusCode = 200;
        break;

      case "/service":
        connect += "Service.html";
        res.statusCode = 200;
        break;

      default:
        connect += "404.html";
    }

    fs.readFile(path.join(__dirname, connect), "utf-8", (error, data) => {
      if (error) {
        console.log(error);
      } else {
        res.write(data);
        res.end();
      }
    });
  }
);

server.listen(port, () => {
  console.log("Running");
});
