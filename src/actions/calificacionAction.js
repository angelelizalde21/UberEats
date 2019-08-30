import { calificacionModel } from '../database/models';
import { updateRepartidor } from '../actions/repartidorAction';

export const addCalificacion = async (Data) => {
  try {
    const newCalificacion = await calificacionModel.create(Data);

    // Se actualiza repartidor
    await updateRepartidor({_id: newCalificacion.repartidor}, { $push: { 'calificaciones':  newCalificacion._id} });
    return await newCalificacion;
  } catch (error) {
    return error;
  }
} 
