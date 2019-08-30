const mongoose = require('mongoose');

const schema = mongoose.Schema;

const categoriaSchema = new schema({
  nombre: {
    type: String,
    required: true,
  },
  imagen: {
    type: String,
  },
  platillos: [{
    type: schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = categoriaSchema;