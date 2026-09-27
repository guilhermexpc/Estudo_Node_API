// Padrão não nomeado
function parseRoutePath(path) {
  // console.log(path);
  const routeParamRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(routeParamRegex, "(?<$1>[a-z0-9-_]+)");

  // Tranforma Path em uma expressão regular
  const pathRegex = new RegExp(`${params}(?<query>\\?(.*))?$`);
  // const pathRegex = new RegExp(`${params}(?<query>\\?(.*)?)?$`);

  console.log(pathRegex);
  return pathRegex;
}

export { parseRoutePath };
