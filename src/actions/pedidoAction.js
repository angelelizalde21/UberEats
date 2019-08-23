import { pedidoModel } from '../database/models';

export const createPedido = async (pedidoData) => {
  try {
    return await pedidoModel.create(pedidoData);
  } catch (error) {
    return  null;
  }
} 

export const getPedido = async () => {
  try {
    return await pedidoModel.find();
  } catch (error) {
    return null;
  }
}

export const updatePedido = async (filtro, update) => {
  try {
    return await pedidoModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return null;
  }
}

export const deletePedido = async (filtro) => {
  try {
    return await pedidoModel.findOneAndDelete(filtro);
  } catch (error) {
    return null;
  }
}