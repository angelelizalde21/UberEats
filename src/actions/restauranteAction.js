import { restauranteModel } from '../database/models';

export const createRestaurante = async (restauranteData) => {
  try {
    return await restauranteModel.create(restauranteData);
  } catch (error) {
    return  null;
  }
}

export const getRestaurante = async () => {
  try {
    return await restauranteModel.find().populate('platillos');
  } catch (error) {
    return null;
  }
}

export const updateRestaurante = async (filtro, update) => {
  try {
    return await restauranteModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return null;
  }
}

export const deleteRestaurante = async (filtro) => {
  try {
    return await restauranteModel.findOneAndDelete(filtro);
  } catch (error) {
    return null;
  }
}