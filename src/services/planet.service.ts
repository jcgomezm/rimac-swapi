import { AppDataSource } from '../connections/db.connection';
import { IPlanet } from '../interfaces/IPlanet';
import { Planet } from '../models/planet';

export class PlanetService {

  public create = async (data: IPlanet): Promise<Planet> => {
    const db = await AppDataSource.initialize();
    const repository = await db.getRepository(Planet);
    const planet = await repository.create(data);
    await repository.save(planet);
    await db.destroy();
    return planet;
  }

  public get = async (id: number): Promise<Planet> => {
    const db = await AppDataSource.initialize();
    const repository = await db.getRepository(Planet);
    const planet = await repository.findOne({ where: { id } });
    await db.destroy();
    return planet;
  }

  public getFromSwapi = async (id: number): Promise<any> => {
    const url = `${ process.env.SWAPI_API }/planets/${ id }`;
    const response = await fetch(url);
    return await response.json();
  }

}
