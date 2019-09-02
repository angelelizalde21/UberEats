"use strict";

var mongoose = require('mongoose');

var schema = mongoose.Schema;
var categoriaSchema = new schema({
  nombre: {
    type: String,
    required: true
  },
  imagen: {
    type: String
  },
  platillos: [{
    type: schema.Types.ObjectId,
    ref: 'platillos'
  }]
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

module.exports = categoriaSchema;
//# sourceMappingURL=categoriaSchema.js.map