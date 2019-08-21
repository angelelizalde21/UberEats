const mongoose = require('mongoose');

const schema = mongoose.Schema;

const platilloSchema = new schema({
  folio: {
    type: String,
    required: true,
  },
  usuario: {
    type: String,
    required: true,
  },
  repartidor: {
    type: String,
    required: false,
  },
  total: {
    type: Number,
    required: true,
  },
  metodoPago: {
    type: String,
    required: true,
    enum:['Tarjeta', 'Efectivo'],
  },
  detalle:  [{
    type: schema.Types.ObjectId,
    ref: 'detalle'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = platilloSchema;