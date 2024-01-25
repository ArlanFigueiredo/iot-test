var express = require("express")
var app = express()
var cors = require("cors")

var router = express.Router()
var UserController = require("../Controllers/User.controller")




router.post('/user', UserController.create)



module.exports = router