"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addCalificacion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _models = require("../database/models");

var _repartidorAction = require("../actions/repartidorAction");

var addCalificacion =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(Data) {
    var newCalificacion;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _models.calificacionModel.create(Data);

          case 3:
            newCalificacion = _context.sent;
            _context.next = 6;
            return (0, _repartidorAction.updateRepartidor)({
              _id: newCalificacion.repartidor
            }, {
              $push: {
                'calificaciones': newCalificacion._id
              }
            });

          case 6:
            _context.next = 8;
            return newCalificacion;

          case 8:
            return _context.abrupt("return", _context.sent);

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", _context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function addCalificacion(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.addCalificacion = addCalificacion;
//# sourceMappingURL=calificacionAction.js.map