import { restauranteModel } from '../database/models';

export const createRestaurante = async (restauranteData) => {
  try {
    return await restauranteModel.create(restauranteData);
  } catch (error) {
    return  error;
  }
}

export const getRestaurante = async (filtro) => {
  try {
    return await restauranteModel.find(filtro).populate('platillos');
  } catch (error) {
    return error;
  }
}

export const updateRestaurante = async (filtro, update) => {
  try {
    return await restauranteModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return error;
  }
}

export const deleteRestaurante = async (filtro) => {
  try {
    return await restauranteModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}