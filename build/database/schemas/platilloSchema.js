"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var platilloSchema = new schema({
  restaurante: {
    type: schema.Types.ObjectId,
    required: true,
    ref: 'restaurantes'
  },
  nombre: {
    type: String,
    required: true
  },
  descripcion: {
    type: String,
    required: true
  },
  imagen: {
    type: String
  },
  precio: {
    type: Number,
    required: true
  },
  categoria: {
    type: schema.Types.ObjectId,
    required: true,
    ref: 'categorias'
  }
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = platilloSchema;
//# sourceMappingURL=platilloSchema.js.map