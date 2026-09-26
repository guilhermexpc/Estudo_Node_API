import http from "node:http";
import { jsonBodyHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandler.js";

const server = http.createServer(async (request, response) => {
  const { method, url } = request;

  await jsonBodyHandler(request, response);
  routeHandler(request, response);

  // return response.writeHead(404).end(`Server is running... method: ${method}, url: ${url}`);
});

server.listen(3333);
