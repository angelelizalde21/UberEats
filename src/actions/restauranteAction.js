import { restauranteModel } from '../database/models';

export const createRestaurante = async (restauranteData) => {
  try {
    return await restauranteModel.create(restauranteData);
  } catch (error) {
    console.log(error);
  }
} 

export const getRestaurante = async () => {
  try {
    return await restauranteModel.find();
  } catch (error) {
    return null;
  }
}