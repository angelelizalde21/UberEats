"use strict";

var mongoose = require('mongoose');

var bcrypt = require('bcrypt');

var schema = mongoose.Schema;
var usuarioSchema = new schema({
  nombre: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  genero: {
    type: String,
    "enum": ['HOMBRE', 'MUJER']
  },
  avatar: {
    type: String
  },
  pedidos: [{
    type: schema.Types.ObjectId,
    ref: 'pedidos'
  }]
}, {
  timestamps: true
});

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

usuarioSchema.pre("save", function (next) {
  var user = this;
  bcrypt.genSalt(10, function (error, salt) {
    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      next();
    });
  });
});
module.exports = usuarioSchema;
//# sourceMappingURL=usuarioSchema.js.map