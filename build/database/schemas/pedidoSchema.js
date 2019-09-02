"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var pedidoSchema = new schema({
  usuario: {
    type: schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
  },
  repartidor: {
    type: schema.Types.ObjectId,
    ref: 'repartidores'
  },
  total: {
    type: Number,
    required: true
  },
  estatus: {
    type: String,
    required: true,
    "enum": ['PEDIDO', 'RECOGIDO', 'ENTREGADO']
  },
  detalle: [{
    restaurante: {
      type: schema.Types.ObjectId,
      required: true,
      ref: 'restaurantes'
    },
    platillo: {
      type: schema.Types.ObjectId,
      required: true,
      ref: 'platillos'
    },
    cantidad: {
      type: Number,
      require: true
    }
  }]
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = pedidoSchema;
//# sourceMappingURL=pedidoSchema.js.map