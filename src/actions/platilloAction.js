import { platilloModel } from '../database/models';

import { updateRestaurante } from './restauranteAction';
import { updateCategoria } from './categoriaAction';

export const createPlatillo = async (platilloData) => {
  try {
    const platilloCreado = await platilloModel.create(platilloData);
    const update = { $push: { 'platillos': platilloCreado._id } };
    await updateRestaurante({ _id: platilloCreado.restaurante }, update);
    await updateCategoria({ _id: platilloCreado.categoria }, update);
    return platilloCreado;
  } catch (error) {
    return error;
  }
}

export const getPlatillo = async (filtro) => {
  try {
    return await platilloModel.find(filtro).populate('restaurante').populate('categoria');
  } catch (error) {
    return error;
  }
}

export const updatePlatillo = async (filtro, update) => {
  try {
    return await platilloModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return error;
  }
}

export const deletePlatillo = async (filtro) => {
  try {
    return await platilloModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}

