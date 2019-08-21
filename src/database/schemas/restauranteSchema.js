const mongoose = require('mongoose');

const schema = mongoose.Schema;

const restauranteSchema = new schema({
  clave: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  direccion: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
  },
  tiempoEspera: {
    type: String,
    required: true,
  },
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = restauranteSchema;