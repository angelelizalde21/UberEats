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