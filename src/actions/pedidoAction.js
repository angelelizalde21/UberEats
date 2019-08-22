import { pedidoModel } from '../database/models';

export const createPedido = async (pedidoData) => {
  try {
    return await pedidoModel.create(pedidoData);
  } catch (error) {
    console.log(error);
  }
} 

export const getPedido = async () => {
  try {
    return await pedidoModel.find();
  } catch (error) {
    return null;
  }
}