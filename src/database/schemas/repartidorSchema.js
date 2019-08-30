const mongoose = require('mongoose');

const schema = mongoose.Schema;

const repartidorSchema = new schema({
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
    enum: ['HOMBRE', 'MUJER']
  },
  avatar: {
    type: String,
  },
  pedidos: [{
    type: schema.Types.ObjectId,
    ref: 'pedidos'
  }],
  calificaciones: [{
    type: schema.Types.ObjectId,
    ref: 'calificaciones'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = repartidorSchema;