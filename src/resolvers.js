const usuarios = [{
    id: 1,
    nome: 'caio',
    email: 'caio@email.com'
},
{
    id: 2,
    nome: 'marcelo',
    email: 'marcelo@email.com'
}
]

const resolvers = {
    Query: {
        users(){
            return usuarios
        },
        user( _ ,{id}){
            console.log(typeof id)
            return usuarios.find(i =>  i.id == id)
        }
    },
    Mutation: {
        createUser( _, {nome, email}){
            let id = usuarios.length 
            usuarios.push({id: id+1,nome, email})
            return usuarios[id]
        }

    }
}
module.exports = resolvers