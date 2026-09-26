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
    const routeParams = request.url.match(route.path);
    // console.log(`routeParam: ${routeParam}`);
    // console.log(routeParam);
    console.log(routeParams.groups);

    // cria um novo objeto
    const { ...params } = routeParams.groups;

    console.log(params);
    // Cria um parametro pq js é assim ¯\_(^ - ^)_/¯
    request.params = params;
    return route.handler(request, response);
  }

  return response.writeHead(404).end(`Rota não encontrada`);
}

export { routeHandler };
