function parseRoutePath(path) {
  // console.log(path);
  const routeParamRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(routeParamRegex, "(?<$1>[a-z0-9-_]+)");

  // Tranforma Path em uma expressão regular
  const pathRegex = new RegExp(params);
  console.log(pathRegex);
  return pathRegex;
}

export { parseRoutePath };
