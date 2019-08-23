import { repartidoreModel } from '../database/models';

export const createRepartidor = async (repartidorData) => {
  try {
    return await repartidoreModel.create(repartidorData);
  } catch (error) {
    return  null;
  }
} 

export const getRepartidor = async () => {
  try {
    return await repartidoreModel.find();
  } catch (error) {
    return null;
  }
}

export const updateRepartidor = async (filtro, update) => {
  try {
    return await repartidoreModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return null;
  }
}

export const deleteRepartidor = async (filtro) => {
  try {
    return await repartidoreModel.findOneAndDelete(filtro);
  } catch (error) {
    return null;
  }
}