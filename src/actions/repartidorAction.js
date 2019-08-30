import { repartidoreModel } from '../database/models';
import { updatePedido, getPedido } from '../actions/pedidoAction';

export const createRepartidor = async (repartidorData) => {
  try {
    return await repartidoreModel.create(repartidorData);
  } catch (error) {
    return error;
  }
}

export const getRepartidor = async (filtro) => {
  try {
    const repartidores = await repartidoreModel.find(filtro).populate('pedidos').populate('calificaciones');
    return  await calificacionRepartidor(repartidores);
  } catch (error) {
    return error;
  }
}

export const updateRepartidor = async (filtro, update) => {
  try {
    return await repartidoreModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return error;
  }
}

export const deleteRepartidor = async (filtro) => {
  try {
    return await repartidoreModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}

const calificacionRepartidor = async (rep) => {
  const retorno = []
  rep.forEach(item => {
    let totalEstrellas = 0
    item.calificaciones.forEach(calificacion => {
      totalEstrellas += calificacion.calificacion
    })
    const totalCalificaciones = item.calificaciones.length === 0 ? 1 : item.calificaciones.length
    item.estrellas = totalEstrellas / totalCalificaciones
    retorno.push(item);
  })
  return retorno;
}

export const setRepartidorPedido = async (filtro) => {
  try {
    // Obtiene datos del pedido
    const data = await getPedido(filtro);

    // Seleccionar repartidor al asar
    const repartidores = await getRepartidor();
    var random = Math.floor(Math.random() * (+(repartidores.length - 1) - +0)) + +0;
    const repartidor = repartidores[random];
    // Agregar pedido a repartidor
    await updateRepartidor({ _id: repartidor._id }, { $push: { 'pedidos': filtro._id } })

    // Promedio de calificacion
    let totalEstrellas = 0
    repartidor.calificaciones.forEach(calificacion => {
      totalEstrellas += calificacion.calificacion
    })
    const totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 : repartidor.calificaciones.length
    repartidor.estrellas = totalEstrellas / totalCalificaciones

    const update = { $set: { ...data, estatus: 'RECOGIDO', repartidor: repartidor._id } };
    await updatePedido(filtro, update);
    return repartidor;
  } catch (error) {
    return error;
  }
}