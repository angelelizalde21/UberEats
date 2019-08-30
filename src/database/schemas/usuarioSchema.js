const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
    enum: ['HOMBRE', 'MUJER']
  },
  avatar: {
    type: String,
  },
  pedidos: [{
    type: schema.Types.ObjectId,
    ref: 'pedidos'
  }]

}, { timestamps: true });

mongoose.Types.ObjectId.prototype.valueOf = function () {
  return this.toString();
};

usuarioSchema.pre("save", function (next) {
  let user = this;
  bcrypt.genSalt(10, function (error, salt) {
    bcrypt.hash(user.password, salt, function (error, hash) {
      if (error) return next(error);
      user.password = hash;
      next();
    });
  });
});

module.exports = usuarioSchema;