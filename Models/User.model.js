var uuid = require("uuid")
var knexRepositories = require("../database/connection")
class UserModel{

    async create(data){
        const user = await knexRepositories.select('*').table('usuarios').where({email: data.email})
        console.log(user)
        if(!user){
            await knexRepositories.insert({
                id: uuid.v4(),
                nome: data.nome,
                email: data.email,
                password: data.password
            }).into('usuarios')
            
        }

    }
}

module.exports = new UserModel()