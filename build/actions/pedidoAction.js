"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePedido = exports.updatePedido = exports.getPedido = exports.createPedido = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _usuarioAction = require("./usuarioAction");

var createPedido =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(pedidoData) {
    var nuevoPedido, update;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.pedidoModel.create(pedidoData);

          case 3:
            nuevoPedido = _context.sent;
            update = {
              $push: {
                'pedidos': nuevoPedido._id
              }
            };
            _context.next = 7;
            return (0, _usuarioAction.updateUsuario)({
              _id: nuevoPedido.usuario
            }, update);

          case 7:
            return _context.abrupt("return", nuevoPedido);

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 10]]);
  }));

  return function createPedido(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPedido = createPedido;

var getPedido =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filtro) {
    var pedidos;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.pedidoModel.find(filtro).populate('usuario').populate('repartidor').populate('detalle.restaurante').populate('detalle.platillo');

          case 3:
            pedidos = _context2.sent;
            return _context2.abrupt("return", pedidos);

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function getPedido(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPedido = getPedido;

var updatePedido =
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
            return _models.pedidoModel.findOneAndUpdate(filtro, update, {
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

  return function updatePedido(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updatePedido = updatePedido;

var deletePedido =
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
            return _models.pedidoModel.findOneAndDelete(filtro);

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

  return function deletePedido(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePedido = deletePedido;
//# sourceMappingURL=pedidoAction.js.map