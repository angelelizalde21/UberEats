"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var restauranteSchema = new schema({
  nombre: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  tiempoEspera: {
    type: String,
    required: true
  },
  platillos: [{
    type: schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = restauranteSchema;
//# sourceMappingURL=restauranteSchema.js.map