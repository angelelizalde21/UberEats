"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _mongoose = _interopRequireDefault(require("mongoose"));

var _schemas = _interopRequireDefault(require("./graphql/schemas"));

var _resolvers = _interopRequireDefault(require("./graphql/resolvers"));

var _authActions = require("./actions/authActions");

var _index = require("./config/index");

var _require = require('apollo-server'),
    ApolloServer = _require.ApolloServer;

// Mongoose
_mongoose["default"].connect(_index.DATABASE, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
});

var mongoDB = _mongoose["default"].connection;
mongoDB.on('error', console.error.bind(console, 'Error de conexion'));
mongoDB.on('open', function () {
  return console.log('BD conectada !!');
}); // GraphQL

var server = new ApolloServer({
  typeDefs: _schemas["default"],
  resolvers: _resolvers["default"],
  schemaDirectives: {
    AuthDirective: _authActions.AuthDirective
  },
  context: function () {
    var _context = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(_ref) {
      var req;
      return _regenerator["default"].wrap(function _callee$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              req = _ref.req;
              return _context2.abrupt("return", (0, _authActions.getContext)(req));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee);
    }));

    function context(_x) {
      return _context.apply(this, arguments);
    }

    return context;
  }(),
  introspection: true,
  playground: true
});
server.listen(process.env.PORT || 8080).then(function (_ref2) {
  var url = _ref2.url;
  console.log('🚀 server is ready at ' + url);
});
//# sourceMappingURL=index.js.map