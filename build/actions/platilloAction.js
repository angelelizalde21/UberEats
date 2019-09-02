"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePlatillo = exports.updatePlatillo = exports.getPlatillo = exports.createPlatillo = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _restauranteAction = require("./restauranteAction");

var _categoriaAction = require("./categoriaAction");

var createPlatillo =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(platilloData) {
    var platilloCreado, update;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.platilloModel.create(platilloData);

          case 3:
            platilloCreado = _context.sent;
            update = {
              $push: {
                'platillos': platilloCreado._id
              }
            };
            _context.next = 7;
            return (0, _restauranteAction.updateRestaurante)({
              _id: platilloCreado.restaurante
            }, update);

          case 7:
            _context.next = 9;
            return (0, _categoriaAction.updateCategoria)({
              _id: platilloCreado.categoria
            }, update);

          case 9:
            return _context.abrupt("return", platilloCreado);

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function createPlatillo(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.createPlatillo = createPlatillo;

var getPlatillo =
/*#__PURE__*/
function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(filtro) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _models.platilloModel.find(filtro).populate('restaurante').populate('categoria');

          case 3:
            return _context2.abrupt("return", _context2.sent);

          case 6:
            _context2.prev = 6;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", _context2.t0);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 6]]);
  }));

  return function getPlatillo(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPlatillo = getPlatillo;

var updatePlatillo =
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
            return _models.platilloModel.findOneAndUpdate(filtro, update, {
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

  return function updatePlatillo(_x3, _x4) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updatePlatillo = updatePlatillo;

var deletePlatillo =
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
            return _models.platilloModel.findOneAndDelete(filtro);

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

  return function deletePlatillo(_x5) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deletePlatillo = deletePlatillo;
//# sourceMappingURL=platilloAction.js.map