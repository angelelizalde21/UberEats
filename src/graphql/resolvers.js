import { getUsuario, createUsuario, updateUsuario, deleteUsuario } from "../actions/usuarioAction";
import { getRepartidor, createRepartidor, updateRepartidor, deleteRepartidor } from '../actions/repartidorAction';
import { getRestaurante, createRestaurante, updateRestaurante, deleteRestaurante } from '../actions/restauranteAction';
import { getCategoria, createCategoria, updateCategoria, deleteCategoria } from '../actions/categoriaAction';
import { getPlatillo, createPlatillo, updatePlatillo, deletePlatillo } from '../actions/platilloAction';
import { getPedido, createPedido, updatePedido, deletePedido } from '../actions/pedidoAction';

const resolvers = {
  Query: {
    getUsuario: async () => {
      try {
        return await getUsuario();
      } catch (error) {
        return null;
      }
    },
    getRepartidor: async () => {
      try {
        return await getRepartidor();
      } catch (error) {
        return null;
      }
    },
    getRestaurante: async () => {
      try {
        return await getRestaurante();
      } catch (error) {
        return null;
      }
    },
    getCategoria: async () => {
      try {
        return await getCategoria();
      } catch (error) {
        return null;
      }
    },
    getPlatillo: async () => {
      try {
        return await getPlatillo();
      } catch (error) {
        return null;
      }
    },
    getPedido: async () => {
      try {
        return await getPedido();
      } catch (error) {
        return null;
      }
    }
  },
  Mutation: {
    // USUARIOS
    addUsuario: async (parent, args) => await createUsuario(args.data),
    updateUsuario: async (parent, {data, usuarioID}) => {
      try {
        const filtro = { _id: usuarioID }
        const update = { $set: { ...data } }
        return await updateUsuario(filtro, update)
      } catch (error) {
        return null;
      }
    },
    deleteUsuario: async (parent, {usuarioID}) => {
      try {
        const filtro = { _id: usuarioID }
        return await deleteUsuario(filtro)
      } catch (error) {
        return null;
      }
    },
    // REPARTIDORES
    addRepartidor: async (parent, args) => await createRepartidor(args.data),
    updateRepartidor: async (parent, {data, repartidorID}) => {
      try {
        const filtro = { _id: repartidorID }
        const update = { $set: { ...data } }
        return await updateRepartidor(filtro, update)
      } catch (error) {
        return null;
      }
    },
    deleteRepartidor: async (parent, {repartidorID}) => {
      try {
        const filtro = { _id: repartidorID }
        return await deleteRepartidor(filtro)
      } catch (error) {
        return null;
      }
    },
    // RESTAURANTE
    addRestaurante: async (parent, args) => await createRestaurante(args.data),
    updateRestaurante: async (parent, { data, restauranteID }) => {
      try {
        const filtro = { _id: restauranteID }
        const update = { $set: { ...data } }
        return await updateRestaurante(filtro, update);
      } catch (error) {
        return null;
      }
    },
    deleteRestaurante: async (parent, {restauranteID}) => {
      try {
        const filtro = { _id: restauranteID }
        return await deleteRestaurante(filtro)
      } catch (error) {
        return null;
      }
    },
    // CATEGORIAS
    addCategoria: async (parent, args, context, info) => await createCategoria(args.data),
    updateCategoria: async (parent, { data, categoriaID }) => {
      try {
        const filtro = { _id: categoriaID }
        const update = { $set: { ...data } }
        return await updateCategoria(filtro, update);
      } catch (error) {
        return null;
      }
    },
    deleteCategoria: async (parent, {categoriaID}) => {
      try {
        const filtro = { _id: categoriaID }
        return await deleteCategoria(filtro)
      } catch (error) {
        return null;
      }
    },
    // PLATILLOS
    addPlatillo: async (parent, { data, restauranteID }) => await createPlatillo(data, restauranteID),
    updatePlatillo: async (parent, { data, platilloID }) => {
      try {
        const filtro = { _id: platilloID }
        const update = { $set: { ...data } }
        return await updatePlatillo(filtro, update);
      } catch (error) {
        return null;
      }
    },
    deletePlatillo: async (parent, {platilloID}) => {
      try {
        const filtro = { _id: platilloID }
        return await deletePlatillo(filtro)
      } catch (error) {
        return null;
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
        return null;
      }
    },
    deletePedido: async (parent, {pedidoID}) => {
      try {
        const filtro = { _id: pedidoID }
        return await deletePedido(filtro)
      } catch (error) {
        return null;
      }
    },
  }
};


export default resolvers;