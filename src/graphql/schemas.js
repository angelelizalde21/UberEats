import { gql } from 'apollo-server';

const typeDefs = gql`
  directive @AuthDirective on QUERY | FIELD_DEFINITION | FIELD

  type Token {
    token: String
  }
 
  type Usuario {
    _id: ID
    nombre: String
    email: String
    password: String
    genero: Gender
    avatar: String
    pedidos: [Pedido]
  }

  type Repartidor {
    _id: ID
    nombre: String
    email: String
    password: String
    genero: Gender
    avatar: String
    estrellas: Int
    pedidos: [Pedido]
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
    platillos: [Platillo]
  }

  type Platillo {
    _id: ID
    restaurante: Restaurante
    nombre: String
    descripcion: String
    imagen: String
    precio: String
    categoria: Categoria
  }

  type Pedido {
    _id: ID
    usuario: Usuario
    repartidor: Repartidor
    total: Float
    estatus: String
    metodoPago: String
    createdAt: String
    detalle: [Detalle]
  }

  type Detalle {
    restaurante: Restaurante
    platillo: Platillo
    cantidad: Int
  }

  type Calificacion {
    _id: ID
     repartidor: Repartidor
     usuario: Usuario
     comentario: String
     calificacion: Int
  }

  type Buzon {
    _id: ID
    usuario: Usuario
    detalle: [Detalle]
  }

  input UsuarioInput {
    nombre: String!
    email: String!
    password: String!
    genero: Gender
    avatar: Upload
  }

  input RepartidorInput {
    nombre: String!
    email: String!
    password: String!
    genero: Gender
    avatar: Upload
  }

  input RestauranteInput {
    nombre: String!
    direccion: String!
    avatar: Upload
    tiempoEspera: String!
  }

  input CategoriaInput {
    nombre: String!
    imagen: Upload
  }

  input PlatilloInput {
    restaurante: ID!
    nombre: String!
    descripcion: String!
    imagen: Upload
    precio: Float!
    categoria: ID!
  }

  input PedidoInput {
    usuario: ID!
    repartidor: ID
    total: Float!
    estatus: Estatus!
    detalle: [DetalleInput]!
  } 

  input PedidoBuscarInput {
    usuario: ID!
    repartidor: ID
    total: Float
    estatus: Estatus
  } 

  input DetalleInput {
    restaurante: ID!
    platillo: ID!
    cantidad: Float!
  }

  input CalificacionInput {
    repartidor: ID
    usuario: ID
    comentario: String!
    calificacion: Int
  }

  input BuzonInput {
    usuario: ID
    detalle: [DetalleInput]
  }

  input BuzonUpdateInput {
    _id: ID
    usuario: ID
    detalle: [DetalleInput]
  }

  enum Gender {
    HOMBRE
    MUJER
  }

  enum Estatus {
    PEDIDO
    RECOGIDO
    ENTREGADO
  }

  type Subscription {
    buzonAdded: Buzon
  }  

  type Query {
    getUsuario(data: UsuarioInput): [Usuario] @AuthDirective
    getRepartidor(data: RepartidorInput): [Repartidor] @AuthDirective
    getRestaurante(data: RestauranteInput): [Restaurante] @AuthDirective
    getCategoria(data: CategoriaInput): [Categoria] @AuthDirective
    getPlatillo(data: PlatilloInput): [Platillo] @AuthDirective
    getPedido(data: PedidoBuscarInput): [Pedido] @AuthDirective
    getBuzon(data: BuzonInput) : [Buzon] @AuthDirective
    getLoginUser : Usuario @AuthDirective
  }


  type Mutation {
    doLogin(email: String, password: String) : Token
    addUsuario(data: UsuarioInput) : Token 
    updateUsuario(data: UsuarioInput, usuarioID: ID) : Usuario @AuthDirective
    deleteUsuario(usuarioID: ID) : Usuario @AuthDirective
    addRepartidor(data: RepartidorInput) : Repartidor @AuthDirective
    updateRepartidor(data: RepartidorInput, repartidorID: ID) : Repartidor @AuthDirective
    deleteRepartidor(repartidorID: ID) : Repartidor @AuthDirective
    addRestaurante(data: RestauranteInput) : Restaurante @AuthDirective
    updateRestaurante(data: RestauranteInput, restauranteID: ID) : Restaurante @AuthDirective
    deleteRestaurante(restauranteID: ID) : Restaurante @AuthDirective
    addCategoria(data: CategoriaInput) : Categoria @AuthDirective
    updateCategoria(data: CategoriaInput, categoriaID: ID) : Categoria @AuthDirective
    deleteCategoria(categoriaID: ID) : Categoria @AuthDirective
    addPlatillo(data: PlatilloInput) : Platillo @AuthDirective
    updatePlatillo(data: PlatilloInput, platilloID: ID) : Platillo @AuthDirective
    deletePlatillo(platilloID: ID) : Platillo @AuthDirective
    addPedido(data: PedidoInput) : Pedido @AuthDirective
    updatePedido(data: PedidoInput, pedidoID: ID) : Pedido @AuthDirective
    deletePedido(pedidoID: ID) : Pedido @AuthDirective
    setRepartidorPedido(pedidoID: ID) : Repartidor @AuthDirective
    setEntregarPedido(pedidoID: ID) : Pedido @AuthDirective
    setCalificacion(data: CalificacionInput) : Calificacion @AuthDirective
    addBuzon(data: BuzonInput) : Buzon @AuthDirective
    updateBuzon(data: BuzonUpdateInput) : Buzon @AuthDirective
    deleteBuzon(usuarioID: ID) : Buzon @AuthDirective
  }
`;

export default typeDefs;