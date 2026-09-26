function parseRoutePath(path) {
  // console.log(path);
  const routeParamRegex = /:([a-zA-Z]+)/g;

  const params = path.replaceAll(routeParamRegex, "(?<$1>[a-z0-9-_]+)");

  const pathRegex = new RegExp(params);
  // console.log(params);
  console.log(pathRegex);

  return pathRegex;
}

export { parseRoutePath };
