import { IHttpError } from './http.errors';

export const CREATED_RESPONSE = (response: any) => {
  return {
    statusCode: 201,
    body: JSON.stringify(response, null, 2),
  };
}

export const SUCCESS_RESPONSE = (response: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response, null, 2),
  };
}

export const ERROR_RESPONSE = (error: IHttpError) => {
  return {
    statusCode: error.statusCode || 500,
    body: JSON.stringify({
      message: error.message || 'Internal server error',
    }, null, 2),
  };
}
