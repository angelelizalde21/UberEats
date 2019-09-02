const NODE_ENV = process.env.NODE_ENV || "dev"

const ENVS = {
  dev: {
    SECRET: 'secretUberEatCode',
    PORT: 5000,
    DATABASE: 'mongodb+srv://myApp:admin21@cluster0-9jcvj.mongodb.net/UberEats?retryWrites=true&w=majority',
    CLOUD_NAME: 'du8i297qx',
    API_KEY: '815649953141156',
    API_SECRET: 'AuaE6dslMG9MdxR4VXRMgXgL7pE'
  },
  test: {
    SECRET: 'secretUberEatCode',
    PORT: 5000,
    DATABASE: 'mongodb+srv://myApp:admin21@cluster0-9jcvj.mongodb.net/UberEats?retryWrites=true&w=majority',
    CLOUD_NAME: 'du8i297qx',
    API_KEY: '815649953141156',
    API_SECRET: 'AuaE6dslMG9MdxR4VXRMgXgL7pE'
  },
  production: {
    SECRET: process.env.SECRET,
    PORT: process.env.PORT,
    DATABASE: process.env.DATABASE,
    CLOUD_NAME: process.env.CLOUD_NAME,
    API_KEY: process.env.API_KEY,
    API_SECRET: process.env.API_SECRET
  }
}

module.exports = ENVS[NODE_ENV]