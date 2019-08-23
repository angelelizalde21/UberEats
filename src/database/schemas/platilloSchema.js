const mongoose = require('mongoose');

const schema = mongoose.Schema;

const platilloSchema = new schema({
  restauranteID: {
    type: schema.Types.ObjectId,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: false,
  },
  precio: {
    type: String,
    required: true,
  },
  categoria: {
    type: schema.Types.ObjectId,
    required: true,
  }
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = platilloSchema;