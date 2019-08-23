const mongoose = require('mongoose');

const schema = mongoose.Schema;

const usuarioSchema = new schema({
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
  tarjetas:  [{
    type: schema.Types.ObjectId,
    ref: 'tarjetas'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = usuarioSchema;