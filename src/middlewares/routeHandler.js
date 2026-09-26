import { routes } from "../routes.js";

function routeHandler(request, response) {
  const route = routes.find((route) => {
    //Verificação padrão
    // return route.method === request.method && route.path === request.url;

    // Verificação com expressão regular
    return route.method === request.method && route.path.test(request.url);
  });

  // console.log(route);

  if (route) {
    return route.handler(request, response);
  }

  return response.writeHead(404).end(`Rota não encontrada`);
}

export { routeHandler };
