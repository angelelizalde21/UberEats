const mongoose = require('mongoose');

// Schemas
const usuarioSchema = require('../schemas/usuarioSchema');
const repartidorSchema = require('../schemas/repartidorSchema');
const restauranteSchema = require('../schemas/restauranteSchema');
const categoriaSchema = require('../schemas/categoriaSchema');
const platilloSchema = require('../schemas/platilloSchema');
const pedidoSchema = require('../schemas/pedidoSchema');

// Models
const usuarioModel = mongoose.model('usuarios', usuarioSchema);
const repartidoreModel = mongoose.model('repartidores', repartidorSchema);
const restauranteModel = mongoose.model('restaurantes', restauranteSchema);
const categoriaModel = mongoose.model('categorias', categoriaSchema);
const platilloModel = mongoose.model('platillos', platilloSchema);
const pedidoModel = mongoose.model('pedidos', pedidoSchema);

module.exports = {
  usuarioModel,
  repartidoreModel,
  restauranteModel,
  categoriaModel,
  platilloModel,
  pedidoModel
};
