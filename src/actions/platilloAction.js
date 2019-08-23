import { platilloModel } from '../database/models';

import { updateRestaurante } from './restauranteAction';

export const createPlatillo = async (platilloData, restauranteID) => {
  try {
    console.log(platilloData, restauranteID)
    const platilloCreado = await platilloModel.create(platilloData);
    console.log(platilloCreado)
    console.log(restauranteID)
    const filter = { _id: restauranteID };
    const update = { $push: { 'platillos': platilloCreado._id } };
    await updateRestaurante(filter, update)
    return platilloCreado;
  } catch (error) {
    console.log(error);
  }
}

export const getPlatillo = async () => {
  try {
    return await platilloModel.find();
  } catch (error) {
    return null;
  }
}

export const updatePlatillo = async (filtro, update) => {
  try {
    return await platilloModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return null;
  }
}

export const deletePlatillo = async (filtro) => {
  try {
    return await platilloModel.findOneAndDelete(filtro);
  } catch (error) {
    return null;
  }
}