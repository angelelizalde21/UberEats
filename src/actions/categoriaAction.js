import { categoriaModel } from '../database/models';

export const createCategoria = async (categoriaData) => {
  try {
    return await categoriaModel.create(categoriaData);
  } catch (error) {
    return  error;
  }
} 

export const getCategoria = async (filtro) => {
  try {
    return await categoriaModel.find(filtro).populate('platillos');
  } catch (error) {
    return error;
  }
}


export const updateCategoria = async (filtro, update) => {
  try {
    return await categoriaModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return error;
  }
}

export const deleteCategoria = async (filtro) => {
  try {
    return await categoriaModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}