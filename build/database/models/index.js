"use strict";

var mongoose = require('mongoose'); // Schemas


var usuarioSchema = require('../schemas/usuarioSchema');

var repartidorSchema = require('../schemas/repartidorSchema');

var restauranteSchema = require('../schemas/restauranteSchema');

var categoriaSchema = require('../schemas/categoriaSchema');

var platilloSchema = require('../schemas/platilloSchema');

var pedidoSchema = require('../schemas/pedidoSchema');

var calificacionSchema = require('../schemas/calificacionSchema');

var buzonSchema = require('../schemas/buzonSchema'); // Models


var usuarioModel = mongoose.model('usuarios', usuarioSchema);
var repartidoreModel = mongoose.model('repartidores', repartidorSchema);
var restauranteModel = mongoose.model('restaurantes', restauranteSchema);
var categoriaModel = mongoose.model('categorias', categoriaSchema);
var platilloModel = mongoose.model('platillos', platilloSchema);
var pedidoModel = mongoose.model('pedidos', pedidoSchema);
var calificacionModel = mongoose.model('calificaciones', calificacionSchema);
var buzonModel = mongoose.model('buzonpedidos', buzonSchema);
module.exports = {
  usuarioModel: usuarioModel,
  repartidoreModel: repartidoreModel,
  restauranteModel: restauranteModel,
  categoriaModel: categoriaModel,
  platilloModel: platilloModel,
  pedidoModel: pedidoModel,
  calificacionModel: calificacionModel,
  buzonModel: buzonModel
};
//# sourceMappingURL=index.js.map