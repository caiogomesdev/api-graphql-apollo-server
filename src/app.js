const {ApolloServer} = require("apollo-server")

const typeDefs = require('./typedefs')
const resolvers = require('./resolvers')

class App{
    constructor(){
        this.server = new ApolloServer({
            typeDefs,
            resolvers
        })
    }
}

module.exports = new App().server