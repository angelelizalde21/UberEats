import { gql } from 'apollo-server';

const typeDefs = gql`
 
  type Usuario {
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
    tarjetas: [String]
  }

  type Repartidor {
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
  }

  type Restaurante {
    _id: ID
    nombre: String
    direccion: String
    avatar: String
    tiempoEspera: String
    platillos: [Platillo]
  }

  type Categoria {
    _id: ID
    nombre: String
    imagen: String
  }

  type Platillo {
    _id: ID
    restauranteID: ID
    nombre: String
    descripcion: String
    imagen: String
    precio: String
    categoriaID: ID
  }

  type Pedido {
    _id: ID
    usuarioID: ID
    repartidorID: ID
    total: Float
    metodoPago: String
    detalle: [Detalle]
  }

  type Detalle {
    restauranteID: ID
    platilloID: ID
    cantidad: Int
  }


  input UsuarioInput {
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
  }

  input RepartidorInput {
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
  }

  input RestauranteInput {
    nombre: String
    direccion: String
    avatar: String
    tiempoEspera: String
  }

  input CategoriaInput {
    nombre: String
    imagen: String
  }

  input PlatilloInput {
    restauranteID: ID
    nombre: String
    descripcion: String
    imagen: String
    precio: String
    categoriaID: ID
  }

  input PedidoInput {
    usuarioID: ID
    repartidorID: ID
    total: Float
    metodoPago: String
    detalle: [DetalleInput]
  } 

  input DetalleInput {
    restauranteID: ID
    platilloID: ID
    cantidad: Float
  }
 
  type Query {
    getUsuario: [Usuario]
    getRepartidor: [Repartidor]
    getRestaurante: [Restaurante]
    getCategoria: [Categoria]
    getPlatillo: [Platillo]
    getPedido: [Pedido]
  }


  type Mutation {
    addUsuario(data: UsuarioInput) : Usuario
    updateUsuario(data: UsuarioInput, usuarioID: ID) : Usuario
    deleteUsuario(usuarioID: ID) : Usuario
    addRepartidor(data: RepartidorInput) : Repartidor
    updateRepartidor(data: RepartidorInput, repartidorID: ID) : Repartidor
    deleteRepartidor(repartidorID: ID) : Repartidor
    addRestaurante(data: RestauranteInput) : Restaurante
    updateRestaurante(data: RestauranteInput, restauranteID: ID) : Restaurante
    deleteRestaurante(restauranteID: ID) : Restaurante
    addCategoria(data: CategoriaInput) : Categoria
    updateCategoria(data: CategoriaInput, categoriaID: ID) : Categoria
    deleteCategoria(categoriaID: ID) : Categoria
    addPlatillo(data: PlatilloInput, restauranteID: ID) : Platillo
    updatePlatillo(data: PlatilloInput, platilloID: ID) : Platillo
    deletePlatillo(platilloID: ID) : Platillo
    addPedido(data: PedidoInput) : Pedido
    updatePedido(data: PedidoInput, pedidoID: ID) : Pedido
    deletePedido(pedidoID: ID) : Pedido
  }
`;

export default typeDefs;