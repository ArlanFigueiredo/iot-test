var userModel = require("../Models/User.model")  
class UserController{

    async create(req, res){
        const {name, email, password} = req.body
        const data = {
            name,
            email,
            password
        }

        try {
            const user = await userModel.create(data)
            res.status(201).send({
                message: 'Created user successfully'
            })
        } catch (error) {
            console.log(error)
        }    

    }
}

module.exports = new UserController()