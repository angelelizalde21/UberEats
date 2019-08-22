import { categoriaModel } from '../database/models';

export const createCategoria = async (categoriaData) => {
  try {
    return await categoriaModel.create(categoriaData);
  } catch (error) {
    console.log(error);
  }
} 

export const getCategoria = async () => {
  try {
    return await categoriaModel.find();
  } catch (error) {
    return null;
  }
}