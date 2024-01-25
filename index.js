var express = require("express")
var app = express()
var cors = require("cors")
app.use(cors())
var bodyParser = require("body-parser")

var router = require("./routes/routes")

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use("/", router)

router.get('/register', (req, res) => {
    res.render("user/register")
})

router.get('/app', (req, res) => {
    res.render("index")
})

router.get('/login', (req, res) => {
    res.render("user/login")
})

router.get('/home', (req, res) => {
    res.render('app/home')
})

router.get('/cameras', (req, res) => {
    res.render('app/cameras')
})


router.get('/perfil', (req, res) => {
    res.render('user/perfil')
})

router.get('/sensores', (req, res) => {
    res.render('app/sensores')
})


router.get('/planos', (req, res) => {
    res.render('app/planos')
})



app.listen(8080, () => {
    console.log("APP RODANDO COM SUCESSO!")
})