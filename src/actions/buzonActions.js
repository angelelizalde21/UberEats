import { buzonModel } from '../database/models';

export const getBuzon = async (filtro) => {
  try {
    return await buzonModel.find(filtro)
      .populate('usuario')
      .populate('detalle.restaurante')
      .populate('detalle.platillo');
      
  } catch (error) {
    return error;
  }
}

export const addBuzon = async (data) => {
  try {
    return await buzonModel.create(data);
  } catch (error) {
    return error;
  }
}

export const updateBuzon = async (filtro, update) => {
  try {
    return await buzonModel.findOneAndUpdate(filtro, update);
  } catch (error) {
    return error;
  }
}

export const deleteBuzon = async (filtro) => {
  try {
    return await buzonModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}