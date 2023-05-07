interface HttpResponse<T = any> {
  statusCode: number
  body: T | null
}


export{
  HttpResponse,
  Ok as ok,
  Created as created,
  NoContent as noContent
}

function Ok<T>(dto:T):HttpResponse<T>{
  return {
    statusCode:200,
    body:dto
  }
}
function Created<T>(dto: T | null = null): HttpResponse<T> {
  return {
    statusCode: 201,
    body: dto,
  }
}

function NoContent(): HttpResponse<undefined> {
  return {
    statusCode: 201,
    body: null,
  }
}