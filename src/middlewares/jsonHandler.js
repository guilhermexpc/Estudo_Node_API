async function jsonBodyHandler(request, response) {
  const buffer = [];

  //Coleta os pedaços da requisição
  for await (const chunk of request) {
    buffer.push(chunk);
  }

  const body = Buffer.concat(buffer).toString().trim();

  if (body) {
    try {
      request.body = JSON.parse(body);
    } catch (error) {
      console.log("Error", error);
      request.body = null;
    }
  } else {
    request.body = null;
  }

  response.setHeader("Content-Type", "application/json");
}

export { jsonBodyHandler };
