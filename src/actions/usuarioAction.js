import { usuarioModel } from '../database/models';


export const createUsuario = async (userData) => {
  try {
    return await usuarioModel.create(userData);
  } catch (error) {
    console.log(error);
  }
} 

export const getUsuario = async () => {
  try {
    return await usuarioModel.find();
  } catch (error) {
    return null;
  }
}

export const updateUsuario = async (filtro, update) => {
  try {
    return await usuarioModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return null;
  }
}

export const deleteUsuario = async (filtro) => {
  try {
    return await usuarioModel.findOneAndDelete(filtro);
  } catch (error) {
    return null;
  }
}