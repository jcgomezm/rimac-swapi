import { IPlanet } from '../interfaces/IPlanet';
import { Planet } from '../models/planet';
import { PlanetService } from '../services/planet.service';

export class PlanetController {

  private planetService: PlanetService;

  constructor() {
    this.planetService = new PlanetService();
  }

  public create = async (data: IPlanet): Promise<Planet> => {
    return await this.planetService.create(data);
  }

  public get = async (id: number): Promise<Planet> => {
    return await this.planetService.get(id);
  }

  public getFromSwapi = async (id: number): Promise<IPlanet> => {
    return await this.planetService.getFromSwapi(id);
  }

}
