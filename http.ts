const Dataset = [
  {
    id: "1",
    name: "Daniel Okwudili",
    stack: "Half Stack",
  },
  {
    id: "2",
    name: "Jemima Udoka",
    stack: "Entry Level",
  },
  {
    id: "3",
    name: "Sean Etang",
    stack: "Full Stack`",
  },
];

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

      case "/service":
        connect += "Service.html";
        res.statusCode = 200;
        break;

      case "/order":
        connect += "Order.html";
        res.statusCode = 200;
        break;

      case "/contact":
        connect += "Contact.html";
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

const port1 = 4000;

const server1 = http.createServer(
  (req: IncomingMessage, res: ServerResponse<IncomingMessage>) => {
    req.statusCode = 200;

    if (
      req.url === "/other" &&
      req.method === "GET" &&
      res.statusCode === 200
    ) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(Dataset));
    }
  }
);
server1.listen(port, () => {
  console.log("done");
});
