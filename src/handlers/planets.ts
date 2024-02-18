import { PlanetController } from '../controllers/planet.controller';
import { Planet } from '../models/planet';
import { CREATED_RESPONSE, ERROR_RESPONSE, SUCCESS_RESPONSE } from '../utils/handler-responses';

module.exports.create = async (event: any) => {
  try {
    const controller = new PlanetController();
    const payload = JSON.parse(event.body);
    const data: Planet = await controller.create(payload);
    return CREATED_RESPONSE({ data });
  } catch (error) {
    return ERROR_RESPONSE(error);
  }
}

module.exports.get = async (event: any) => {
  try {
    const id = Number(event.pathParameters.id);
    const controller = new PlanetController();
    const data = await controller.get(id);
    return SUCCESS_RESPONSE({ data });
  } catch (error) {
    return ERROR_RESPONSE(error);
  }
}

module.exports.getFromSwapi = async (event: any) => {
  try {
    const id = Number(event.pathParameters.id);
    const controller = new PlanetController();
    const data = await controller.getFromSwapi(id);
    return SUCCESS_RESPONSE({ data });
  } catch (error) {
    return ERROR_RESPONSE(error);
  }
}
