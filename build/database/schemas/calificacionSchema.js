"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var calificacionSchema = new schema({
  repartidor: {
    type: schema.Types.ObjectId,
    required: true,
    ref: 'repartidores'
  },
  usuario: {
    type: schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
  },
  comentario: {
    type: String
  },
  calificacion: {
    type: Number,
    required: true,
    "enum": [0, 1, 2, 3, 4, 5]
  }
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = calificacionSchema;
//# sourceMappingURL=calificacionSchema.js.map