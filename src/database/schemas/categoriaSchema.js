const mongoose = require('mongoose');

const schema = mongoose.Schema;

const categoriaSchema = new schema({
  clave: {
    type: String,
    required: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
    required: false,
  },
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = categoriaSchema;