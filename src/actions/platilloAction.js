import { platilloModel } from '../database/models';

export const createPlatillo = async (platilloData) => {
  try {
    return await platilloModel.create(platilloData);
  } catch (error) {
    console.log(error);
  }
} 

export const getPlatillo = async () => {
  try {
    return await platilloModel.find();
  } catch (error) {
    return null;
  }
}