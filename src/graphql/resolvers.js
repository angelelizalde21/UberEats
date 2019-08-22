import { getUsuario, createUsuario } from "../actions/usuarioAction";
import { getRepartidor, createRepartidor } from '../actions/repartidorAction';
import { getRestaurante, createRestaurante } from '../actions/restauranteAction';
import { getCategoria, createCategoria } from '../actions/categoriaAction';
import { getPlatillo, createPlatillo } from '../actions/platilloAction';
import { getPedido, createPedido } from '../actions/pedidoAction';

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
    },
  },
  Mutation: {
    addUsuario: async (parent, args, context, info) => await createUsuario(args.data),
    addRepartidor: async (parent, args, context, info) => await createRepartidor(args.data),
    addRestaurante: async (parent, args, context, info) => await createRestaurante(args.data),
    addCategoria: async (parent, args, context, info) => await createCategoria(args.data),
    addPlatillo: async (parent, args, context, info) => await createPlatillo(args.data),
    addPedido: async (parent, args, context, info) => await createPedido(args.data),
  }
};


export default resolvers;