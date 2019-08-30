import { getUsuario, createUsuario, updateUsuario, deleteUsuario, doLoginAction } from "../actions/usuarioAction";
import { getRepartidor, createRepartidor, updateRepartidor, deleteRepartidor, setRepartidorPedido } from '../actions/repartidorAction';
import { getRestaurante, createRestaurante, updateRestaurante, deleteRestaurante } from '../actions/restauranteAction';
import { getCategoria, createCategoria, updateCategoria, deleteCategoria } from '../actions/categoriaAction';
import { getPlatillo, createPlatillo, updatePlatillo, deletePlatillo } from '../actions/platilloAction';
import { getPedido, createPedido, updatePedido, deletePedido } from '../actions/pedidoAction';
import { addCalificacion } from '../actions/calificacionAction';
import { getBuzon, addBuzon, updateBuzon, deleteBuzon } from '../actions/buzonActions';

import { storeUpload } from "../utils/uploader";

const resolvers = {
  Query: {
    getUsuario: async (parents, { data }) => {
      try {
        const filtro = { ...data };
        return await getUsuario(filtro);
      } catch (error) {
        return error;
      }
    },
    getLoginUser: (parents, { user }) => {
      try {
        return user;
      } catch (error) {
        return error;
      }
    },
    getRepartidor: async (parents, { data }) => {
      try {
        const filtro = { ...data };
        return await getRepartidor(filtro);
      } catch (error) {
        return error;
      }
    },
    getRestaurante: async (parents, { data }) => {
      try {
        const filtro = { ...data };
        return await getRestaurante(filtro);
      } catch (error) {
        return error;
      }
    },
    getCategoria: async (parents, { data }) => {
      try {
        const filtro = { ...data };
        return await getCategoria(filtro);
      } catch (error) {
        return error;
      }
    },
    getPlatillo: async (parents, { data }) => {
      try {
        const filtro = { ...data };
        return await getPlatillo(filtro);
      } catch (error) {
        return error;
      }
    },
    getPedido: async (parent, { data }) => {
      try {
        const filtro = { ...data };
        return await getPedido(filtro);
      } catch (error) {
        return error;
      }
    },
    getBuzon: async (parent, { data }) => {
      try {
        const filtro = { ...data };
        return await getBuzon(filtro);
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    // USUARIOS
    doLogin: async (parent, { email, password }, context, info) => {
      try {
        return await doLoginAction(email, password);
      } catch (error) {
        return error;
      }
    },
    addUsuario: async (parent, { data }) => {
      try {
        let newInfo;
        if (data.avatar) {

          const { createReadStream } = await data.avatar;
          const stream = createReadStream();
          const { url } = await storeUpload(stream);
          newInfo = {
            ...data,
            avatar: url,
          }
        } else {
          newInfo = { ...data }
        }
        return await createUsuario(newInfo);
      } catch (error) {
        return error;
      }
    },
    updateUsuario: async (parent, { data, usuarioID }) => {
      try {
        const filtro = { _id: usuarioID }
        const update = { $set: { ...data } }
        return await updateUsuario(filtro, update)
      } catch (error) {
        return error;
      }
    },
    deleteUsuario: async (parent, { usuarioID }) => {
      try {
        const filtro = { _id: usuarioID }
        return await deleteUsuario(filtro)
      } catch (error) {
        return error;
      }
    },
    // REPARTIDORES
    addRepartidor: async (parent, { data }) => {
      try {
        let newInfo;
        if (data.avatar) {

          const { createReadStream } = await data.avatar;
          const stream = createReadStream();
          const { url } = await storeUpload(stream);
          newInfo = {
            ...data,
            avatar: url,
          }
        } else {
          newInfo = { ...data }
        }
        return await createRepartidor(newInfo)
      } catch (error) {
        return error;
      }
    },
    updateRepartidor: async (parent, { data, repartidorID }) => {
      try {
        const filtro = { _id: repartidorID }
        const update = { $set: { ...data } }
        return await updateRepartidor(filtro, update)
      } catch (error) {
        return error;
      }
    },
    deleteRepartidor: async (parent, { repartidorID }) => {
      try {
        const filtro = { _id: repartidorID }
        return await deleteRepartidor(filtro)
      } catch (error) {
        return error;
      }
    },
    setRepartidorPedido: async (parent, { pedidoID }) => {
      try {
        const filtro = { _id: pedidoID }
        return await setRepartidorPedido(filtro)
      } catch (error) {
        return error;
      }
    },
    // RESTAURANTE
    addRestaurante: async (parent, { data }) => {
      try {

        let newInfo;
        if (data.avatar) {

          const { createReadStream } = await data.avatar;
          const stream = createReadStream();
          const { url } = await storeUpload(stream);
          newInfo = {
            ...data,
            avatar: url,
          }
        } else {
          newInfo = { ...data }
        }
        return await createRestaurante(newInfo);
      } catch (error) {
        return error;
      }
    },
    updateRestaurante: async (parent, { data, restauranteID }) => {
      try {
        const filtro = { _id: restauranteID }
        const update = { $set: { ...data } }
        return await updateRestaurante(filtro, update);
      } catch (error) {
        return error;
      }
    },
    deleteRestaurante: async (parent, { restauranteID }) => {
      try {
        const filtro = { _id: restauranteID }
        return await deleteRestaurante(filtro)
      } catch (error) {
        return error;
      }
    },
    // CATEGORIAS
    addCategoria: async (parent, { data }) => {
      try {

        let newInfo;
        if (data.imagen) {

          const { createReadStream } = await data.imagen;
          const stream = createReadStream();
          const { url } = await storeUpload(stream);
          newInfo = {
            ...data,
            imagen: url,
          }
        } else {
          newInfo = { ...data }
        }
        return await createCategoria(newInfo);
      } catch (error) {
        return error;
      }
    },
    updateCategoria: async (parent, { data, categoriaID }) => {
      try {
        const filtro = { _id: categoriaID }
        const update = { $set: { ...data } }
        return await updateCategoria(filtro, update);
      } catch (error) {
        return error;
      }
    },
    deleteCategoria: async (parent, { categoriaID }) => {
      try {
        const filtro = { _id: categoriaID }
        return await deleteCategoria(filtro)
      } catch (error) {
        return error;
      }
    },
    // PLATILLOS
    addPlatillo: async (parent, { data }) => {
      try {
        let newInfo;
        if (data.imagen) {

          const { createReadStream } = await data.imagen;
          const stream = createReadStream();
          const { url } = await storeUpload(stream);
          newInfo = {
            ...data,
            imagen: url,
          }
        } else {
          newInfo = { ...data }
        }

        return await createPlatillo(newInfo);
      } catch (error) {
        return error;
      }
    },
    updatePlatillo: async (parent, { data, platilloID }) => {
      try {
        const filtro = { _id: platilloID }
        const update = { $set: { ...data } }
        return await updatePlatillo(filtro, update);
      } catch (error) {
        return error;
      }
    },
    deletePlatillo: async (parent, { platilloID }) => {
      try {
        const filtro = { _id: platilloID }
        return await deletePlatillo(filtro)
      } catch (error) {
        return error;
      }
    },
    // PEDIDOS
    addPedido: async (parent, args, context, info) => await createPedido(args.data),
    updatePedido: async (parent, { data, pedidoID }) => {
      try {
        const filtro = { _id: pedidoID }
        const update = { $set: { ...data } }
        return await updatePedido(filtro, update);
      } catch (error) {
        return error;
      }
    },
    deletePedido: async (parent, { pedidoID }) => {
      try {
        const filtro = { _id: pedidoID }
        return await deletePedido(filtro)
      } catch (error) {
        return error;
      }
    },
    setEntregarPedido: async (parent, { pedidoID }) => {
      try {
        const filtro = { _id: pedidoID }
        const update = { $set: { estatus: 'ENTREGADO' } };
        return await updatePedido(filtro, update)
      } catch (error) {
        return error;
      }
    },
    // Calificaciones
    setCalificacion: async (parent, { data }) => {
      try {
        return await addCalificacion(data);
      } catch (error) {
        return error;
      }
    },
    // Buzon de pedidos
    addBuzon: async (parent, { data }) => {
      try {
        return await addBuzon(data);
      } catch (error) {
        return error;
      }
    },
    updateBuzon: async (parent, { data }) => {
      try {
        const filtro = { usuario: data.usuario };
        const update = { $set: { detalle: data.detalle } }
        return await updateBuzon(filtro, update);
      } catch (error) {
        return error;
      }
    },
    deleteBuzon: async (parent, { usuarioID }) => {
      try {
        const filtro = { usuario: usuarioID };
        return await deleteBuzon(filtro);
      } catch (error) {
        return error;
      }
    },
  }
};


export default resolvers;