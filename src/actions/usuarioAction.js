import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import { usuarioModel } from '../database/models';

Date.prototype.addDays = function (days) {
  const date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const createToken = (userData) => {
  const exp = new Date().addDays(5).getTime();
  const payload = {
    _id: userData._id,
    email: userData.email,
    nombre: userData.nombre,
    exp,
  }

  const token = jwt.sign(payload, process.env.SECRET);
  return { token }
}


export const createUsuario = async (userData) => {
  try {
    const newUser = await usuarioModel.create(userData);
    const token = createToken(newUser);
    return token;
  } catch (error) {
    return error;
  }
}

export const getUsuario = async (filtro) => {
  try {
    return await usuarioModel.find(filtro).populate('pedidos');
  } catch (error) {
    return error;
  }
}

export const doLoginAction = async (email, password) => {
  try {
    const user = await usuarioModel.findOne({ email });
    if (!user || !bcrypt.compareSync(password, user.password)) { return null }
    return createToken(user);
  } catch (error) {
    return error;
  }
}

export const updateUsuario = async (filtro, update) => {
  try {
    return await usuarioModel.findOneAndUpdate(filtro, update, { new: true });
  } catch (error) {
    return error;
  }
}

export const deleteUsuario = async (filtro) => {
  try {
    return await usuarioModel.findOneAndDelete(filtro);
  } catch (error) {
    return error;
  }
}

export const findUserAction = async (filter) => {
  try {
    return await usuarioModel.findOne(filter);
  } catch (error) {
    return error;
  }
}
