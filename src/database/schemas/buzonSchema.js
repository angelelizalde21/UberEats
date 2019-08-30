const mongoose = require('mongoose');

const schema = mongoose.Schema;

const buzonSchema = new schema({
  usuario: {
    type: schema.Types.ObjectId,
    required: true,
    ref: 'usuarios'
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
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = buzonSchema;