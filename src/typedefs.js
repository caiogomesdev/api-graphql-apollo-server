const {gql} = require("apollo-server")

const typeDefs = gql`
    type User {
        id: ID!
        nome: String!
        email: String!
    }
    type Query {
        users: [User]
        user(id: ID!): User
    }
    type Mutation{
        createUser(nome: String!, email: String!): User
    }

`

module.exports = typeDefs