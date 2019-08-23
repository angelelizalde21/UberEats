const mongoose = require('mongoose');

const schema = mongoose.Schema;


const detalleSchema = new schema({
  restauranteID: {
    type: schema.Types.ObjectId,
    required: true,
  },
  platilloID: {
    type: schema.Types.ObjectId,
    required: true,
  },
  cantidad: {
    type: Number
  }
});

const platilloSchema = new schema({
  usuarioID: {
    type: schema.Types.ObjectId,
    required: true,
  },
  repartidorID: {
    type: schema.Types.ObjectId,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  metodoPago: {
    type: String,
    required: true,
    enum: ['Tarjeta', 'Efectivo'],
  },
  detalle: [detalleSchema]
}, { timestamps: true });


mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = platilloSchema;