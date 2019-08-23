import { categoriaModel } from '../database/models';

export const createCategoria = async (categoriaData) => {
  try {
    return await categoriaModel.create(categoriaData);
  } catch (error) {
    return  null;
  }
} 

export const getCategoria = async () => {
  try {
    return await categoriaModel.find();
  } catch (error) {
    return null;
  }
}


export const updateCategoria = async (filtro, update) => {
  try {
    return await categoriaModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return null;
  }
}

export const deleteCategoria = async (filtro) => {
  try {
    return await categoriaModel.findOneAndDelete(filtro);
  } catch (error) {
    return null;
  }
}