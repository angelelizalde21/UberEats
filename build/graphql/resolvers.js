"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _apolloServer = require("apollo-server");

var _usuarioAction = require("../actions/usuarioAction");

var _repartidorAction = require("../actions/repartidorAction");

var _restauranteAction = require("../actions/restauranteAction");

var _categoriaAction = require("../actions/categoriaAction");

var _platilloAction = require("../actions/platilloAction");

var _pedidoAction = require("../actions/pedidoAction");

var _calificacionAction = require("../actions/calificacionAction");

var _buzonActions = require("../actions/buzonActions");

var _uploader = require("../utils/uploader");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var pubSub = new _apolloServer.PubSub();
var BUZON_ADDED = 'BUZON_ADDED';
var resolvers = {
  Subscription: {
    buzonAdded: {
      subscribe: function subscribe(parent, args, context, info) {
        return pubSub.asyncIterator([BUZON_ADDED]);
      }
    }
  },
  Query: {
    getUsuario: function () {
      var _getUsuario2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee(parents, _ref) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _ref.data;
                _context.prev = 1;
                filtro = _objectSpread({}, data);
                _context.next = 5;
                return (0, _usuarioAction.getUsuario)(filtro);

              case 5:
                return _context.abrupt("return", _context.sent);

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](1);
                return _context.abrupt("return", _context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 8]]);
      }));

      function getUsuario(_x, _x2) {
        return _getUsuario2.apply(this, arguments);
      }

      return getUsuario;
    }(),
    getLoginUser: function getLoginUser(parents, args, _ref2) {
      var user = _ref2.user;

      try {
        return user;
      } catch (error) {
        return error;
      }
    },
    getRepartidor: function () {
      var _getRepartidor2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee2(parents, _ref3) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                data = _ref3.data;
                _context2.prev = 1;
                filtro = _objectSpread({}, data);
                _context2.next = 5;
                return (0, _repartidorAction.getRepartidor)(filtro);

              case 5:
                return _context2.abrupt("return", _context2.sent);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](1);
                return _context2.abrupt("return", _context2.t0);

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[1, 8]]);
      }));

      function getRepartidor(_x3, _x4) {
        return _getRepartidor2.apply(this, arguments);
      }

      return getRepartidor;
    }(),
    getRestaurante: function () {
      var _getRestaurante2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee3(parents, _ref4) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                data = _ref4.data;
                _context3.prev = 1;
                filtro = _objectSpread({}, data);
                _context3.next = 5;
                return (0, _restauranteAction.getRestaurante)(filtro);

              case 5:
                return _context3.abrupt("return", _context3.sent);

              case 8:
                _context3.prev = 8;
                _context3.t0 = _context3["catch"](1);
                return _context3.abrupt("return", _context3.t0);

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, null, [[1, 8]]);
      }));

      function getRestaurante(_x5, _x6) {
        return _getRestaurante2.apply(this, arguments);
      }

      return getRestaurante;
    }(),
    getCategoria: function () {
      var _getCategoria2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee4(parents, _ref5) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                data = _ref5.data;
                _context4.prev = 1;
                filtro = _objectSpread({}, data);
                _context4.next = 5;
                return (0, _categoriaAction.getCategoria)(filtro);

              case 5:
                return _context4.abrupt("return", _context4.sent);

              case 8:
                _context4.prev = 8;
                _context4.t0 = _context4["catch"](1);
                return _context4.abrupt("return", _context4.t0);

              case 11:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, null, [[1, 8]]);
      }));

      function getCategoria(_x7, _x8) {
        return _getCategoria2.apply(this, arguments);
      }

      return getCategoria;
    }(),
    getPlatillo: function () {
      var _getPlatillo2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee5(parents, _ref6) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                data = _ref6.data;
                _context5.prev = 1;
                filtro = _objectSpread({}, data);
                _context5.next = 5;
                return (0, _platilloAction.getPlatillo)(filtro);

              case 5:
                return _context5.abrupt("return", _context5.sent);

              case 8:
                _context5.prev = 8;
                _context5.t0 = _context5["catch"](1);
                return _context5.abrupt("return", _context5.t0);

              case 11:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, null, [[1, 8]]);
      }));

      function getPlatillo(_x9, _x10) {
        return _getPlatillo2.apply(this, arguments);
      }

      return getPlatillo;
    }(),
    getPedido: function () {
      var _getPedido2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee6(parent, _ref7) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                data = _ref7.data;
                _context6.prev = 1;
                filtro = _objectSpread({}, data);
                _context6.next = 5;
                return (0, _pedidoAction.getPedido)(filtro);

              case 5:
                return _context6.abrupt("return", _context6.sent);

              case 8:
                _context6.prev = 8;
                _context6.t0 = _context6["catch"](1);
                return _context6.abrupt("return", _context6.t0);

              case 11:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, null, [[1, 8]]);
      }));

      function getPedido(_x11, _x12) {
        return _getPedido2.apply(this, arguments);
      }

      return getPedido;
    }(),
    getBuzon: function () {
      var _getBuzon2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee7(parent, _ref8) {
        var data, filtro;
        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                data = _ref8.data;
                _context7.prev = 1;
                filtro = _objectSpread({}, data);
                _context7.next = 5;
                return (0, _buzonActions.getBuzon)(filtro);

              case 5:
                return _context7.abrupt("return", _context7.sent);

              case 8:
                _context7.prev = 8;
                _context7.t0 = _context7["catch"](1);
                return _context7.abrupt("return", _context7.t0);

              case 11:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, null, [[1, 8]]);
      }));

      function getBuzon(_x13, _x14) {
        return _getBuzon2.apply(this, arguments);
      }

      return getBuzon;
    }()
  },
  Mutation: {
    // USUARIOS
    doLogin: function () {
      var _doLogin = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee8(parent, _ref9, context, info) {
        var email, password;
        return _regenerator["default"].wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                email = _ref9.email, password = _ref9.password;
                _context8.prev = 1;
                _context8.next = 4;
                return (0, _usuarioAction.doLoginAction)(email, password);

              case 4:
                return _context8.abrupt("return", _context8.sent);

              case 7:
                _context8.prev = 7;
                _context8.t0 = _context8["catch"](1);
                return _context8.abrupt("return", _context8.t0);

              case 10:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, null, [[1, 7]]);
      }));

      function doLogin(_x15, _x16, _x17, _x18) {
        return _doLogin.apply(this, arguments);
      }

      return doLogin;
    }(),
    addUsuario: function () {
      var _addUsuario = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee9(parent, _ref10) {
        var data, newInfo, _ref11, createReadStream, stream, _ref12, url;

        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                data = _ref10.data;
                _context9.prev = 1;

                if (!data.avatar) {
                  _context9.next = 15;
                  break;
                }

                _context9.next = 5;
                return data.avatar;

              case 5:
                _ref11 = _context9.sent;
                createReadStream = _ref11.createReadStream;
                stream = createReadStream();
                _context9.next = 10;
                return (0, _uploader.storeUpload)(stream);

              case 10:
                _ref12 = _context9.sent;
                url = _ref12.url;
                newInfo = _objectSpread({}, data, {
                  avatar: url
                });
                _context9.next = 16;
                break;

              case 15:
                newInfo = _objectSpread({}, data);

              case 16:
                _context9.next = 18;
                return (0, _usuarioAction.createUsuario)(newInfo);

              case 18:
                return _context9.abrupt("return", _context9.sent);

              case 21:
                _context9.prev = 21;
                _context9.t0 = _context9["catch"](1);
                return _context9.abrupt("return", _context9.t0);

              case 24:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, null, [[1, 21]]);
      }));

      function addUsuario(_x19, _x20) {
        return _addUsuario.apply(this, arguments);
      }

      return addUsuario;
    }(),
    updateUsuario: function () {
      var _updateUsuario2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee10(parent, _ref13) {
        var data, usuarioID, filtro, update;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                data = _ref13.data, usuarioID = _ref13.usuarioID;
                _context10.prev = 1;
                filtro = {
                  _id: usuarioID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context10.next = 6;
                return (0, _usuarioAction.updateUsuario)(filtro, update);

              case 6:
                return _context10.abrupt("return", _context10.sent);

              case 9:
                _context10.prev = 9;
                _context10.t0 = _context10["catch"](1);
                return _context10.abrupt("return", _context10.t0);

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, null, [[1, 9]]);
      }));

      function updateUsuario(_x21, _x22) {
        return _updateUsuario2.apply(this, arguments);
      }

      return updateUsuario;
    }(),
    deleteUsuario: function () {
      var _deleteUsuario2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee11(parent, _ref14) {
        var usuarioID, filtro;
        return _regenerator["default"].wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                usuarioID = _ref14.usuarioID;
                _context11.prev = 1;
                filtro = {
                  _id: usuarioID
                };
                _context11.next = 5;
                return (0, _usuarioAction.deleteUsuario)(filtro);

              case 5:
                return _context11.abrupt("return", _context11.sent);

              case 8:
                _context11.prev = 8;
                _context11.t0 = _context11["catch"](1);
                return _context11.abrupt("return", _context11.t0);

              case 11:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, null, [[1, 8]]);
      }));

      function deleteUsuario(_x23, _x24) {
        return _deleteUsuario2.apply(this, arguments);
      }

      return deleteUsuario;
    }(),
    // REPARTIDORES
    addRepartidor: function () {
      var _addRepartidor = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee12(parent, _ref15) {
        var data, newInfo, _ref16, createReadStream, stream, _ref17, url;

        return _regenerator["default"].wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                data = _ref15.data;
                _context12.prev = 1;

                if (!data.avatar) {
                  _context12.next = 15;
                  break;
                }

                _context12.next = 5;
                return data.avatar;

              case 5:
                _ref16 = _context12.sent;
                createReadStream = _ref16.createReadStream;
                stream = createReadStream();
                _context12.next = 10;
                return (0, _uploader.storeUpload)(stream);

              case 10:
                _ref17 = _context12.sent;
                url = _ref17.url;
                newInfo = _objectSpread({}, data, {
                  avatar: url
                });
                _context12.next = 16;
                break;

              case 15:
                newInfo = _objectSpread({}, data);

              case 16:
                _context12.next = 18;
                return (0, _repartidorAction.createRepartidor)(newInfo);

              case 18:
                return _context12.abrupt("return", _context12.sent);

              case 21:
                _context12.prev = 21;
                _context12.t0 = _context12["catch"](1);
                return _context12.abrupt("return", _context12.t0);

              case 24:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, null, [[1, 21]]);
      }));

      function addRepartidor(_x25, _x26) {
        return _addRepartidor.apply(this, arguments);
      }

      return addRepartidor;
    }(),
    updateRepartidor: function () {
      var _updateRepartidor2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee13(parent, _ref18) {
        var data, repartidorID, filtro, update;
        return _regenerator["default"].wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                data = _ref18.data, repartidorID = _ref18.repartidorID;
                _context13.prev = 1;
                filtro = {
                  _id: repartidorID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context13.next = 6;
                return (0, _repartidorAction.updateRepartidor)(filtro, update);

              case 6:
                return _context13.abrupt("return", _context13.sent);

              case 9:
                _context13.prev = 9;
                _context13.t0 = _context13["catch"](1);
                return _context13.abrupt("return", _context13.t0);

              case 12:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, null, [[1, 9]]);
      }));

      function updateRepartidor(_x27, _x28) {
        return _updateRepartidor2.apply(this, arguments);
      }

      return updateRepartidor;
    }(),
    deleteRepartidor: function () {
      var _deleteRepartidor2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee14(parent, _ref19) {
        var repartidorID, filtro;
        return _regenerator["default"].wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                repartidorID = _ref19.repartidorID;
                _context14.prev = 1;
                filtro = {
                  _id: repartidorID
                };
                _context14.next = 5;
                return (0, _repartidorAction.deleteRepartidor)(filtro);

              case 5:
                return _context14.abrupt("return", _context14.sent);

              case 8:
                _context14.prev = 8;
                _context14.t0 = _context14["catch"](1);
                return _context14.abrupt("return", _context14.t0);

              case 11:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, null, [[1, 8]]);
      }));

      function deleteRepartidor(_x29, _x30) {
        return _deleteRepartidor2.apply(this, arguments);
      }

      return deleteRepartidor;
    }(),
    setRepartidorPedido: function () {
      var _setRepartidorPedido2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee15(parent, _ref20) {
        var pedidoID, filtro;
        return _regenerator["default"].wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                pedidoID = _ref20.pedidoID;
                _context15.prev = 1;
                filtro = {
                  _id: pedidoID
                };
                _context15.next = 5;
                return (0, _repartidorAction.setRepartidorPedido)(filtro);

              case 5:
                return _context15.abrupt("return", _context15.sent);

              case 8:
                _context15.prev = 8;
                _context15.t0 = _context15["catch"](1);
                return _context15.abrupt("return", _context15.t0);

              case 11:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, null, [[1, 8]]);
      }));

      function setRepartidorPedido(_x31, _x32) {
        return _setRepartidorPedido2.apply(this, arguments);
      }

      return setRepartidorPedido;
    }(),
    // RESTAURANTE
    addRestaurante: function () {
      var _addRestaurante = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee16(parent, _ref21) {
        var data, newInfo, _ref22, createReadStream, stream, _ref23, url;

        return _regenerator["default"].wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                data = _ref21.data;
                _context16.prev = 1;

                if (!data.avatar) {
                  _context16.next = 15;
                  break;
                }

                _context16.next = 5;
                return data.avatar;

              case 5:
                _ref22 = _context16.sent;
                createReadStream = _ref22.createReadStream;
                stream = createReadStream();
                _context16.next = 10;
                return (0, _uploader.storeUpload)(stream);

              case 10:
                _ref23 = _context16.sent;
                url = _ref23.url;
                newInfo = _objectSpread({}, data, {
                  avatar: url
                });
                _context16.next = 16;
                break;

              case 15:
                newInfo = _objectSpread({}, data);

              case 16:
                _context16.next = 18;
                return (0, _restauranteAction.createRestaurante)(newInfo);

              case 18:
                return _context16.abrupt("return", _context16.sent);

              case 21:
                _context16.prev = 21;
                _context16.t0 = _context16["catch"](1);
                return _context16.abrupt("return", _context16.t0);

              case 24:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, null, [[1, 21]]);
      }));

      function addRestaurante(_x33, _x34) {
        return _addRestaurante.apply(this, arguments);
      }

      return addRestaurante;
    }(),
    updateRestaurante: function () {
      var _updateRestaurante2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee17(parent, _ref24) {
        var data, restauranteID, filtro, update;
        return _regenerator["default"].wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                data = _ref24.data, restauranteID = _ref24.restauranteID;
                _context17.prev = 1;
                filtro = {
                  _id: restauranteID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context17.next = 6;
                return (0, _restauranteAction.updateRestaurante)(filtro, update);

              case 6:
                return _context17.abrupt("return", _context17.sent);

              case 9:
                _context17.prev = 9;
                _context17.t0 = _context17["catch"](1);
                return _context17.abrupt("return", _context17.t0);

              case 12:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, null, [[1, 9]]);
      }));

      function updateRestaurante(_x35, _x36) {
        return _updateRestaurante2.apply(this, arguments);
      }

      return updateRestaurante;
    }(),
    deleteRestaurante: function () {
      var _deleteRestaurante2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee18(parent, _ref25) {
        var restauranteID, filtro;
        return _regenerator["default"].wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                restauranteID = _ref25.restauranteID;
                _context18.prev = 1;
                filtro = {
                  _id: restauranteID
                };
                _context18.next = 5;
                return (0, _restauranteAction.deleteRestaurante)(filtro);

              case 5:
                return _context18.abrupt("return", _context18.sent);

              case 8:
                _context18.prev = 8;
                _context18.t0 = _context18["catch"](1);
                return _context18.abrupt("return", _context18.t0);

              case 11:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, null, [[1, 8]]);
      }));

      function deleteRestaurante(_x37, _x38) {
        return _deleteRestaurante2.apply(this, arguments);
      }

      return deleteRestaurante;
    }(),
    // CATEGORIAS
    addCategoria: function () {
      var _addCategoria = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee19(parent, _ref26) {
        var data, newInfo, _ref27, createReadStream, stream, _ref28, url;

        return _regenerator["default"].wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                data = _ref26.data;
                _context19.prev = 1;

                if (!data.imagen) {
                  _context19.next = 15;
                  break;
                }

                _context19.next = 5;
                return data.imagen;

              case 5:
                _ref27 = _context19.sent;
                createReadStream = _ref27.createReadStream;
                stream = createReadStream();
                _context19.next = 10;
                return (0, _uploader.storeUpload)(stream);

              case 10:
                _ref28 = _context19.sent;
                url = _ref28.url;
                newInfo = _objectSpread({}, data, {
                  imagen: url
                });
                _context19.next = 16;
                break;

              case 15:
                newInfo = _objectSpread({}, data);

              case 16:
                _context19.next = 18;
                return (0, _categoriaAction.createCategoria)(newInfo);

              case 18:
                return _context19.abrupt("return", _context19.sent);

              case 21:
                _context19.prev = 21;
                _context19.t0 = _context19["catch"](1);
                return _context19.abrupt("return", _context19.t0);

              case 24:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, null, [[1, 21]]);
      }));

      function addCategoria(_x39, _x40) {
        return _addCategoria.apply(this, arguments);
      }

      return addCategoria;
    }(),
    updateCategoria: function () {
      var _updateCategoria2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee20(parent, _ref29) {
        var data, categoriaID, filtro, update;
        return _regenerator["default"].wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                data = _ref29.data, categoriaID = _ref29.categoriaID;
                _context20.prev = 1;
                filtro = {
                  _id: categoriaID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context20.next = 6;
                return (0, _categoriaAction.updateCategoria)(filtro, update);

              case 6:
                return _context20.abrupt("return", _context20.sent);

              case 9:
                _context20.prev = 9;
                _context20.t0 = _context20["catch"](1);
                return _context20.abrupt("return", _context20.t0);

              case 12:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, null, [[1, 9]]);
      }));

      function updateCategoria(_x41, _x42) {
        return _updateCategoria2.apply(this, arguments);
      }

      return updateCategoria;
    }(),
    deleteCategoria: function () {
      var _deleteCategoria2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee21(parent, _ref30) {
        var categoriaID, filtro;
        return _regenerator["default"].wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                categoriaID = _ref30.categoriaID;
                _context21.prev = 1;
                filtro = {
                  _id: categoriaID
                };
                _context21.next = 5;
                return (0, _categoriaAction.deleteCategoria)(filtro);

              case 5:
                return _context21.abrupt("return", _context21.sent);

              case 8:
                _context21.prev = 8;
                _context21.t0 = _context21["catch"](1);
                return _context21.abrupt("return", _context21.t0);

              case 11:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, null, [[1, 8]]);
      }));

      function deleteCategoria(_x43, _x44) {
        return _deleteCategoria2.apply(this, arguments);
      }

      return deleteCategoria;
    }(),
    // PLATILLOS
    addPlatillo: function () {
      var _addPlatillo = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee22(parent, _ref31) {
        var data, newInfo, _ref32, createReadStream, stream, _ref33, url;

        return _regenerator["default"].wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                data = _ref31.data;
                _context22.prev = 1;

                if (!data.imagen) {
                  _context22.next = 15;
                  break;
                }

                _context22.next = 5;
                return data.imagen;

              case 5:
                _ref32 = _context22.sent;
                createReadStream = _ref32.createReadStream;
                stream = createReadStream();
                _context22.next = 10;
                return (0, _uploader.storeUpload)(stream);

              case 10:
                _ref33 = _context22.sent;
                url = _ref33.url;
                newInfo = _objectSpread({}, data, {
                  imagen: url
                });
                _context22.next = 16;
                break;

              case 15:
                newInfo = _objectSpread({}, data);

              case 16:
                _context22.next = 18;
                return (0, _platilloAction.createPlatillo)(newInfo);

              case 18:
                return _context22.abrupt("return", _context22.sent);

              case 21:
                _context22.prev = 21;
                _context22.t0 = _context22["catch"](1);
                return _context22.abrupt("return", _context22.t0);

              case 24:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, null, [[1, 21]]);
      }));

      function addPlatillo(_x45, _x46) {
        return _addPlatillo.apply(this, arguments);
      }

      return addPlatillo;
    }(),
    updatePlatillo: function () {
      var _updatePlatillo2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee23(parent, _ref34) {
        var data, platilloID, filtro, update;
        return _regenerator["default"].wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                data = _ref34.data, platilloID = _ref34.platilloID;
                _context23.prev = 1;
                filtro = {
                  _id: platilloID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context23.next = 6;
                return (0, _platilloAction.updatePlatillo)(filtro, update);

              case 6:
                return _context23.abrupt("return", _context23.sent);

              case 9:
                _context23.prev = 9;
                _context23.t0 = _context23["catch"](1);
                return _context23.abrupt("return", _context23.t0);

              case 12:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, null, [[1, 9]]);
      }));

      function updatePlatillo(_x47, _x48) {
        return _updatePlatillo2.apply(this, arguments);
      }

      return updatePlatillo;
    }(),
    deletePlatillo: function () {
      var _deletePlatillo2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee24(parent, _ref35) {
        var platilloID, filtro;
        return _regenerator["default"].wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                platilloID = _ref35.platilloID;
                _context24.prev = 1;
                filtro = {
                  _id: platilloID
                };
                _context24.next = 5;
                return (0, _platilloAction.deletePlatillo)(filtro);

              case 5:
                return _context24.abrupt("return", _context24.sent);

              case 8:
                _context24.prev = 8;
                _context24.t0 = _context24["catch"](1);
                return _context24.abrupt("return", _context24.t0);

              case 11:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, null, [[1, 8]]);
      }));

      function deletePlatillo(_x49, _x50) {
        return _deletePlatillo2.apply(this, arguments);
      }

      return deletePlatillo;
    }(),
    // PEDIDOS
    addPedido: function () {
      var _addPedido = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee25(parent, args, context, info) {
        return _regenerator["default"].wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return (0, _pedidoAction.createPedido)(args.data);

              case 2:
                return _context25.abrupt("return", _context25.sent);

              case 3:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25);
      }));

      function addPedido(_x51, _x52, _x53, _x54) {
        return _addPedido.apply(this, arguments);
      }

      return addPedido;
    }(),
    updatePedido: function () {
      var _updatePedido2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee26(parent, _ref36) {
        var data, pedidoID, filtro, update;
        return _regenerator["default"].wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                data = _ref36.data, pedidoID = _ref36.pedidoID;
                _context26.prev = 1;
                filtro = {
                  _id: pedidoID
                };
                update = {
                  $set: _objectSpread({}, data)
                };
                _context26.next = 6;
                return (0, _pedidoAction.updatePedido)(filtro, update);

              case 6:
                return _context26.abrupt("return", _context26.sent);

              case 9:
                _context26.prev = 9;
                _context26.t0 = _context26["catch"](1);
                return _context26.abrupt("return", _context26.t0);

              case 12:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, null, [[1, 9]]);
      }));

      function updatePedido(_x55, _x56) {
        return _updatePedido2.apply(this, arguments);
      }

      return updatePedido;
    }(),
    deletePedido: function () {
      var _deletePedido2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee27(parent, _ref37) {
        var pedidoID, filtro;
        return _regenerator["default"].wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                pedidoID = _ref37.pedidoID;
                _context27.prev = 1;
                filtro = {
                  _id: pedidoID
                };
                _context27.next = 5;
                return (0, _pedidoAction.deletePedido)(filtro);

              case 5:
                return _context27.abrupt("return", _context27.sent);

              case 8:
                _context27.prev = 8;
                _context27.t0 = _context27["catch"](1);
                return _context27.abrupt("return", _context27.t0);

              case 11:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, null, [[1, 8]]);
      }));

      function deletePedido(_x57, _x58) {
        return _deletePedido2.apply(this, arguments);
      }

      return deletePedido;
    }(),
    setEntregarPedido: function () {
      var _setEntregarPedido = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee28(parent, _ref38) {
        var pedidoID, filtro, update;
        return _regenerator["default"].wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                pedidoID = _ref38.pedidoID;
                _context28.prev = 1;
                filtro = {
                  _id: pedidoID
                };
                update = {
                  $set: {
                    estatus: 'ENTREGADO'
                  }
                };
                _context28.next = 6;
                return (0, _pedidoAction.updatePedido)(filtro, update);

              case 6:
                return _context28.abrupt("return", _context28.sent);

              case 9:
                _context28.prev = 9;
                _context28.t0 = _context28["catch"](1);
                return _context28.abrupt("return", _context28.t0);

              case 12:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, null, [[1, 9]]);
      }));

      function setEntregarPedido(_x59, _x60) {
        return _setEntregarPedido.apply(this, arguments);
      }

      return setEntregarPedido;
    }(),
    // Calificaciones
    setCalificacion: function () {
      var _setCalificacion = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee29(parent, _ref39) {
        var data;
        return _regenerator["default"].wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                data = _ref39.data;
                _context29.prev = 1;
                _context29.next = 4;
                return (0, _calificacionAction.addCalificacion)(data);

              case 4:
                return _context29.abrupt("return", _context29.sent);

              case 7:
                _context29.prev = 7;
                _context29.t0 = _context29["catch"](1);
                return _context29.abrupt("return", _context29.t0);

              case 10:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, null, [[1, 7]]);
      }));

      function setCalificacion(_x61, _x62) {
        return _setCalificacion.apply(this, arguments);
      }

      return setCalificacion;
    }(),
    // Buzon de pedidos
    addBuzon: function () {
      var _addBuzon2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee30(parent, _ref40) {
        var data, newBuzon;
        return _regenerator["default"].wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                data = _ref40.data;
                _context30.prev = 1;
                _context30.next = 4;
                return (0, _buzonActions.addBuzon)(data);

              case 4:
                newBuzon = _context30.sent;
                pubSub.publish(BUZON_ADDED, {
                  buzonAdded: newBuzon
                });
                return _context30.abrupt("return", newBuzon);

              case 9:
                _context30.prev = 9;
                _context30.t0 = _context30["catch"](1);
                return _context30.abrupt("return", _context30.t0);

              case 12:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, null, [[1, 9]]);
      }));

      function addBuzon(_x63, _x64) {
        return _addBuzon2.apply(this, arguments);
      }

      return addBuzon;
    }(),
    updateBuzon: function () {
      var _updateBuzon2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee31(parent, _ref41) {
        var data, filtro, update, newBuzon;
        return _regenerator["default"].wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                data = _ref41.data;
                _context31.prev = 1;
                filtro = {
                  usuario: data.usuario
                };
                update = {
                  $set: {
                    detalle: data.detalle
                  }
                };
                _context31.next = 6;
                return (0, _buzonActions.updateBuzon)(filtro, update);

              case 6:
                newBuzon = _context31.sent;
                pubSub.publish(BUZON_ADDED, {
                  buzonAdded: newBuzon
                });
                return _context31.abrupt("return", newBuzon);

              case 11:
                _context31.prev = 11;
                _context31.t0 = _context31["catch"](1);
                return _context31.abrupt("return", _context31.t0);

              case 14:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, null, [[1, 11]]);
      }));

      function updateBuzon(_x65, _x66) {
        return _updateBuzon2.apply(this, arguments);
      }

      return updateBuzon;
    }(),
    deleteBuzon: function () {
      var _deleteBuzon2 = (0, _asyncToGenerator2["default"])(
      /*#__PURE__*/
      _regenerator["default"].mark(function _callee32(parent, _ref42) {
        var usuarioID, filtro;
        return _regenerator["default"].wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                usuarioID = _ref42.usuarioID;
                _context32.prev = 1;
                filtro = {
                  usuario: usuarioID
                };
                _context32.next = 5;
                return (0, _buzonActions.deleteBuzon)(filtro);

              case 5:
                return _context32.abrupt("return", _context32.sent);

              case 8:
                _context32.prev = 8;
                _context32.t0 = _context32["catch"](1);
                return _context32.abrupt("return", _context32.t0);

              case 11:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, null, [[1, 8]]);
      }));

      function deleteBuzon(_x67, _x68) {
        return _deleteBuzon2.apply(this, arguments);
      }

      return deleteBuzon;
    }()
  }
};
var _default = resolvers;
exports["default"] = _default;
//# sourceMappingURL=resolvers.js.map