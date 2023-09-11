import http, { IncomingMessage, ServerResponse } from "http";
import fs from "fs";
import path from "path";

const port: number = 3000;
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

const server = http.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    // res.writeHead(200);

    if (req.url === "/" && req.method === "GET" && res.statusCode === 200) {
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify(Dataset));
      res.end();
    }
    //   let connect: string = "site/";

    //   switch (req.url) {
    //     case "/":
    //       connect += "Home.html";
    //       res.statusCode = 200;
    //       break;
    //     case "/about":
    //       connect += "About.html";
    //       res.statusCode = 200;
    //       break;
    //     case "/contact":
    //       connect += "Contact.html";
    //       res.statusCode = 200;
    //       break;
    //     case "/order":
    //       connect += "Order.html";
    //       res.statusCode = 200;
    //       break;
    //   }

    //   fs.readFile(path.join(__dirname, connect), (err, data) => {
    //     if (err) {
    //       console.log("Error", err);
    //       res.end();
    //     } else {
    //       res.write(data);
    //       res.end();
    //     }
    //   });
  }
);

server.listen(port, () => {
  console.log("Running");
});
