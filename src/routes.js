import { parseRoutePath } from "./utils/parseRoutePath.js";

const routes = [
  {
    method: "GET",
    path: "/products",
    handler: (request, response) => {
      return response.writeHead(200).end("products list");
    }
  },
  {
    method: "POST",
    path: "/products",
    handler: (request, response) => {
      console.log(request.body);
      return response.writeHead(201).end(JSON.stringify(request.body));
    }
  },
  {
    method: "DELETE",
    path: "/products/:id",
    handler: (request, response) => {
      return response.end("Produto ID: " + request.params.id);
    }
  }
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path)
}));

export { routes };
