"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRepartidorPedido = exports.deleteRepartidor = exports.updateRepartidor = exports.getRepartidor = exports.createRepartidor = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _pedidoAction = require("../actions/pedidoAction");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var createRepartidor =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(repartidorData) {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.repartidoreModel.create(repartidorData);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 6:
            _context.prev = 6;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 6]]);
  }));

  return function createRepartidor(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createRepartidor = createRepartidor;

var getRepartidor =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filtro) {
    var repartidores;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.repartidoreModel.find(filtro).populate('pedidos').populate('calificaciones');

          case 3:
            repartidores = _context2.sent;
            _context2.next = 6;
            return calificacionRepartidor(repartidores);

          case 6:
            return _context2.abrupt("return", _context2.sent);

          case 9:
            _context2.prev = 9;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 9]]);
  }));

  return function getRepartidor(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getRepartidor = getRepartidor;

var updateRepartidor =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee3(filtro, update) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _models.repartidoreModel.findOneAndUpdate(filtro, update, {
              "new": true
            });

          case 3:
            return _context3.abrupt("return", _context3.sent);

          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            return _context3.abrupt("return", _context3.t0);

          case 9:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 6]]);
  }));

  return function updateRepartidor(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateRepartidor = updateRepartidor;

var deleteRepartidor =
/*#__PURE__*/
function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee4(filtro) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _models.repartidoreModel.findOneAndDelete(filtro);

          case 3:
            return _context4.abrupt("return", _context4.sent);

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            return _context4.abrupt("return", _context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function deleteRepartidor(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteRepartidor = deleteRepartidor;

var calificacionRepartidor =
/*#__PURE__*/
function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee5(rep) {
    var retorno;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            retorno = [];
            rep.forEach(function (item) {
              var totalEstrellas = 0;
              item.calificaciones.forEach(function (calificacion) {
                totalEstrellas += calificacion.calificacion;
              });
              var totalCalificaciones = item.calificaciones.length === 0 ? 1 : item.calificaciones.length;
              item.estrellas = totalEstrellas / totalCalificaciones;
              retorno.push(item);
            });
            return _context5.abrupt("return", retorno);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function calificacionRepartidor(_x6) {
    return _ref5.apply(this, arguments);
  };
}();

var setRepartidorPedido =
/*#__PURE__*/
function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee6(filtro) {
    var data, repartidores, random, repartidor, totalEstrellas, totalCalificaciones, update;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return (0, _pedidoAction.getPedido)(filtro);

          case 3:
            data = _context6.sent;
            _context6.next = 6;
            return getRepartidor();

          case 6:
            repartidores = _context6.sent;
            random = Math.floor(Math.random() * (+(repartidores.length - 1) - +0)) + +0;
            repartidor = repartidores[random]; // Agregar pedido a repartidor

            _context6.next = 11;
            return updateRepartidor({
              _id: repartidor._id
            }, {
              $push: {
                'pedidos': filtro._id
              }
            });

          case 11:
            // Promedio de calificacion
            totalEstrellas = 0;
            repartidor.calificaciones.forEach(function (calificacion) {
              totalEstrellas += calificacion.calificacion;
            });
            totalCalificaciones = repartidor.calificaciones.length === 0 ? 1 : repartidor.calificaciones.length;
            repartidor.estrellas = totalEstrellas / totalCalificaciones;
            update = {
              $set: _objectSpread({}, data, {
                estatus: 'RECOGIDO',
                repartidor: repartidor._id
              })
            };
            _context6.next = 18;
            return (0, _pedidoAction.updatePedido)(filtro, update);

          case 18:
            return _context6.abrupt("return", repartidor);

          case 21:
            _context6.prev = 21;
            _context6.t0 = _context6["catch"](0);
            return _context6.abrupt("return", _context6.t0);

          case 24:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 21]]);
  }));

  return function setRepartidorPedido(_x7) {
    return _ref6.apply(this, arguments);
  };
}();

exports.setRepartidorPedido = setRepartidorPedido;
//# sourceMappingURL=repartidorAction.js.map