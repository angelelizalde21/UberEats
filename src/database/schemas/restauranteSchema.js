const mongoose = require('mongoose');

const schema = mongoose.Schema;

const restauranteSchema = new schema({
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
  },
  tiempoEspera: {
    type: String,
    required: true,
  },
  platillos: [{
    type: schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = restauranteSchema;