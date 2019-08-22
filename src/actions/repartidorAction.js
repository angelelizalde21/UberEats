import { repartidoreModel } from '../database/models';

export const createRepartidor = async (repartidorData) => {
  try {
    return await repartidoreModel.create(repartidorData);
  } catch (error) {
    console.log(error);
  }
} 

export const getRepartidor = async () => {
  try {
    return await repartidoreModel.find();
  } catch (error) {
    return null;
  }
}