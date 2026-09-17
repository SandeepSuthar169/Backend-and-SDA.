import httpm, { IncomingMessage, ServerResponse } from "http";

const server = httpm.createServer(
  (req: IncomingMessage, res: ServerResponse) => {
    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, {
        "content-type": "text/plain",
      });

      res.end("welcome to my node.js server!");
    } else if (req.method === "GET" && req.url === "/users") {
      const users = [
        { id: 1, name: "Rahul" },
        { id: 2, name: "amit" },
      ];

      res.writeHead(200, {
        "content-type": "application/json",
      });

      res.end(JSON.stringify(users));
    } else {
      res.writeHead(404, {
        "content-type": "text/plain",
      });
      res.end("Route not found");
    }
  },
);

server.listen(3000, () => {
  console.log("server running at ", 3000);
});
