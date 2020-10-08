const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser")
const pagamento = require("./models/Pilotos")


app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static('public'))

//Rotas
app.get('/', function(req, res){
  res.render('cad-piloto');
});

app.get('/pilotosus', function(req, res){
    res.render('pilotosus');
});

app.get('/pilotofail', function(req, res){
  res.render('pilotofail');
});

app.get('/cad-piloto', function(req, res){
    res.render('cad-piloto');
});

app.post('/add-piloto', function(req, res){
    pagamento.create({
        nome: req.body.nome,
        equipe: req.body.equipe,
        datanasc: req.body.datanasc,
        sexo: req.body.sexo,
        ncarro: req.body.ncarro
    }).then(function(){
        res.redirect('/pilotosus')
    }).catch(function(erro){
        res.redirect('/pilotofail')
    })

})

app.listen(8081);
