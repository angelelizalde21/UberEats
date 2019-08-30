import { pedidoModel } from '../database/models';

import { updateUsuario } from './usuarioAction';

export const createPedido = async (pedidoData) => {
  try {
    const nuevoPedido = await pedidoModel.create(pedidoData);
    const update = { $push: { 'pedidos': nuevoPedido._id } }
    await updateUsuario({ _id: nuevoPedido.usuario }, update);
    return nuevoPedido;
  } catch (error) {
    return error;
  }
}

export const getPedido = async (filtro) => {
  try {
    const pedidos = await pedidoModel.find(filtro)
      .populate('usuario')
      .populate('repartidor')
      .populate('detalle.restaurante')
      .populate('detalle.platillo');

    return pedidos;
  } catch (error) {
    return error;
  }
}

export const updatePedido = async (filtro, update) => {
  try {
    return await pedidoModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return error;
  }
}

export const deletePedido = async (filtro) => {
  try {
    return await pedidoModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}
