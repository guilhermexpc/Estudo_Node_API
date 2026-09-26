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
  }
];

export { routes };
