import { gql } from 'apollo-server';

const typeDefs = gql`
 
  type Usuario {
    clave: String
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
    tarjetas: [String]
  }

  type Repartidor {
    clave: String
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
  }

  type Restaurante {
    clave: String
    nombre: String
    direccion: String
    avatar: String
    tiempoEspera: String
  }

  type Categoria {
    clave: String
    nombre: String
    imagen: String
  }

  type Platillo {
    clave: String
    restaurate: String
    nombre: String
    descripcion: String
    imagen: String
    precio: String
    categoria: String
  }

  type Pedido {
    folio: String
    usuario: String
    repartidor: String
    total: Int
    metodoPago: String
    detalle: [Detalle]
  }

  type Detalle {
    restaurante: String
    platillo: String
    cantidad: Int
  }


  input UsuarioInput {
    clave: String
    nombre: String
    email: String
    password: String
    genero: String
    avatar: String
    ubicacion: String
  }

  input RestauranteInput {
    clave: String
    nombre: String
    direccion: String
    avatar: String
    tiempoEspera: String
  }

  input CategoriaInput {
    clave: String
    nombre: String
    imagen: String
  }

  input PlatilloInput {
    clave: String
    restaurate: String
    nombre: String
    descripcion: String
    imagen: String
    precio: String
    categoria: String
  }

  input PedidoInput {
    folio: String
    usuario: String
    repartidor: String
    total: Int
    metodoPago: String
    detalle: [DetalleInput]
  } 

  input DetalleInput {
    restaurante: String
    platillo: String
    cantidad: Int
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
    addRepartidor(data: UsuarioInput) : Repartidor
    addRestaurante(data: RestauranteInput) : Restaurante
    addCategoria(data: CategoriaInput) : Categoria
    addPlatillo(data: PlatilloInput) : Platillo
    addPedido(data: PedidoInput) : Pedido
  }
`;

export default typeDefs;