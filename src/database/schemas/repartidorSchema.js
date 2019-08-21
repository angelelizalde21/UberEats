const mongoose = require('mongoose');

const schema = mongoose.Schema;

const repartidorSchema = new schema({
  clave: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  genero: {
    type: String,
    enum: ['Hombre', 'Mujer']
  },
  avatar: {
    type: String,
    required: false,
  },
  ubicacion: {
    type: String,
    required: true,
  },
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = repartidorSchema;