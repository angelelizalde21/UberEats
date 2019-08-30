require('dotenv').config();
const should = require('chai').should();

const request = require('request');
require('../index');
require('isomorphic-fetch');

const HOST = 'http://localhost:4000/graphql';
let token;


function clearDataBase() {
  console.log('Limpiando DATABASE');
  return new Promise(resolve => {
    let count = 0;
    const max = Object.keys(mongoose.connection.collections).length;
    for (const i in mongoose.connection.collections) {
      mongoose.connection.collections[i].remove(function () {
        count++;
        if (count >= max) {
          resolve();
        }
      })
    }
  });
}

// Usuarios

describe('usuario on', () => {
  beforeEach(function (done) {
    clearDataBase()
      .then(() => done())
      .catch(() => done());
  })

  it('deberia registra un usuario', function (done) {
    const json = {
      query: "mutation($data:UsuarioInput){ addUsuario(data:$data){ token } }",
      variables: {
        "data": {
          nombre: 'Maria Catro',
          email: 'Maria@gmail.com',
          password: '123456',
          genero: 'MUJER'
        }
      }
    };

    request.post({
      url: HOST,
      json: json,
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      token = body.data.addUsuario.token;
      done(err);
    })
  })

  it('debe hacer login', function (done) {
    const json = {
      query: "mutation($email: String, $password: String) { doLogin(email:$email, password:$password) { token }}",
      variables: {
        email: "Ruben@gmail.com",
        password: "123456"
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      const loginUSer = body.data.getLoginUser;
      done(err);
    })
  })

  it('debe hacer la peticion del usuario en sesion', function (done) {
    const json = {
      query: "{ getLoginUser { nombre }}",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      const loginUSer = body.data.getLoginUser;
      done(err);
    })
  })

  it('debe hacer la peticion de los usuario', function (done) {
    const json = {
      query: "{getUsuario{ nombre }}",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      const usuarios = body.data.getUsuario;
      done(err);
    })
  })

  it('debe actualizar un usuario', function (done) {
    const json = {
      query: "mutation($data: UsuarioInput, $usuarioID: ID) { updateUsuario(data:$data, usuarioID:$usuarioID)  {nombre}}",
      variables: {
        data: {
          nombre: 'Ruben Alarcon',
          email: 'Ruben@gmail.com',
          password: '123456',
          genero: 'HOMBRE'
        },
        usuarioID: "5d68309a8b4e1429a00ea18e"
      },
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  })

  it('debe eliminar un usuario', function (done) {
    const json = {
      query: "mutation($usuarioID: ID) { deleteUsuario(usuarioID:$usuarioID)  {nombre}} ",
      variables: {
        usuarioID: "5d68305702f7da1480c6923e"
      },
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  // Repartidores

  it('debe agregar un repartidor', function (done) {
    const json = {
      query: "mutation($data: RepartidorInput) { addRepartidor(data:$data)  {nombre}} ",
      variables: {
        data: {
          nombre: 'Jose Robles',
          email: 'Jose@UberEats.com.mx',
          password: '123456',
          genero: 'HOMBRE'
        }
      },
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe actualizar un repartidor', function (done) {
    const json = {
      query: "mutation($data: RepartidorInput, $repartidorID: ID) { updateRepartidor(data:$data, repartidorID:$repartidorID)  {nombre}} ",
      variables: {
        data: {
          nombre: 'Jose Robles',
          email: 'Jose@UberEats.com.mx',
          password: '123456',
          genero: 'HOMBRE'
        },
        repartidorID: "5d68473481399e3deca8b7fe"
      },
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe actualizar un repartidor', function (done) {
    const json = {
      query: "mutation($repartidorID: ID) { deleteRepartidor(repartidorID:$repartidorID)  {nombre}} ",
      variables: {
        repartidorID: "5d68473481399e3deca8b7fe"
      },
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe obtener los repartidores', function (done) {
    const json = {
      query: "{ getRepartidor {nombre}} ",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  // Restaurantes

  it('debe obtener los restaurantes', function (done) {
    const json = {
      query: "{ getRestaurante {nombre}} ",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe insertar un restaurante', function (done) {
    const json = {
      query: "mutation($data: RestauranteInput) { addRestaurante(data:$data) {nombre}} ",
      variables: {
        data: {
          nombre: 'Bonhomia',
          direccion: 'Alv. Obregon #150',
          tiempoEspera: '20 - 30 min'
        },
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });


  it('debe actualiza un restaurante', function (done) {
    const json = {
      query: "mutation($data: RestauranteInput, $restauranteID: ID) { updateRestaurante(data:$data, restauranteID:$restauranteID) {nombre}} ",
      variables: {
        data: {
          nombre: 'Full House',
          direccion: 'Ciudade Hermanas #50',
          tiempoEspera: '25 - 35 min'
        },
        restauranteID: "5d684d6db62858456ce7c73c"
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe eliminar un restaurante', function (done) {
    const json = {
      query: "mutation($restauranteID: ID) { deleteRestaurante(restauranteID:$restauranteID) {nombre}} ",
      variables: {
        restauranteID: "5d684e105f3aa247c880de22"
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  // Categorias


  it('debe obtener las categorias', function (done) {
    const json = {
      query: "{ getCategoria {nombre}} ",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });


  it('debe insertar una categoria', function (done) {
    const json = {
      query: "mutation($data: CategoriaInput) { addCategoria(data:$data) {nombre}} ",
      variables: {
        data: {
          nombre: 'Italiana',
        },
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });


  it('debe actualizar una categoria', function (done) {
    const json = {
      query: "mutation($data: CategoriaInput, $categoriaID: ID) { updateCategoria(data:$data, categoriaID:$categoriaID) {nombre}} ",
      variables: {
        data: {
          nombre: 'Mexicana',
        },
        categoriaID: "5d684f370b195f1d9077bf1e"
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe eliminar una categoria', function (done) {
    const json = {
      query: "mutation($categoriaID: ID) { deleteCategoria(categoriaID:$categoriaID) {nombre}} ",
      variables: {
        categoriaID: "5d6850d812de8f42c0ca95d9"
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  // Platillos

  it('debe obtener los platillos', function (done) {
    const json = {
      query: "{ getPlatillo {nombre}} ",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe insertar un platillo', function (done) {
    const json = {
      query: "mutation($data: PlatilloInput) { addPlatillo(data:$data) {nombre}} ",
      variables: {
        data: {
          restaurante: '5d684d6db62858456ce7c73c',
          nombre: 'Tacos dorados',
          descripcion: 'Orden con 4 pisesas, su caldo y ensalada de verduras.',
          precio: 152.0,
          categoria: '5d684f370b195f1d9077bf1e'
        },
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe actualizar un platillo', function (done) {
    const json = {
      query: "mutation($data: PlatilloInput, $platilloID: ID) { updatePlatillo(data:$data, platilloID:$platilloID) {nombre}} ",
      variables: {
        data: {
          restaurante: '5d684d6db62858456ce7c73c',
          nombre: 'Tostadas',
          descripcion: 'Orden con 4 pisesas, su caldo y ensalada de verduras.',
          precio: 152.0,
          categoria: '5d684f370b195f1d9077bf1e'
        },
        platilloID: '5d6851f72f289643bccb8f39'
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe eliminar un platillo', function (done) {
    const json = {
      query: "mutation($platilloID: ID) { deletePlatillo(platilloID:$platilloID) {nombre}} ",
      variables: {
        platilloID: '5d6852862690ee37b02e95e6'
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  // Pedidos

  it('debe obtener los pedidos', function (done) {
    const json = {
      query: "{ getPedido {usuario { nombre }}} ",
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe insertar un pedido', function (done) {
    const json = {
      query: "mutation($data: PedidoInput) { addPedido(data:$data) { usuario { nombre } }} ",
      variables: {
        data: {
          usuario: '5d68309a8b4e1429a00ea18e',
          total: 1500.00,
          estatus: 'PEDIDO',
          detalle: [
            {
              restaurante: '5d684d6db62858456ce7c73c',
              platillo: '5d6852635f2e5b4a68558179',
              cantidad: 2
            }
          ]
        },
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe agregar repartidor a un pedido', function (done) {
    const json = {
      query: "mutation($pedidoID: ID) { setRepartidorPedido(pedidoID:$pedidoID) {  nombre  }} ",
      variables: {
        pedidoID: '5d6854e5066a290e08c79c5b'
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe marcar un pedido como entregado', function (done) {
    const json = {
      query: "mutation($pedidoID: ID) { setEntregarPedido(pedidoID:$pedidoID) {  usuario { nombre }  }} ",
      variables: {
        pedidoID: '5d6854e5066a290e08c79c5b'
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

  it('debe eliminar un pedido', function (done) {
    const json = {
      query: "mutation($pedidoID: ID) { deletePedido(pedidoID:$pedidoID) {  usuario { nombre }  }} ",
      variables: {
        pedidoID: '5d6847a39c9b1e4a0864cac4'
      }
    };
    request.post({
      url: HOST,
      json: json,
      headers: {
        "Authorization": token,
      }
    }, function (err, res, body) {
      should.not.exist(err);
      should.exist(res);
      expect(res.statusCode).toBe(200);
      body.should.have.property('data');
      done(err);
    })
  });

});