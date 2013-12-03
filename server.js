var express = require('express');
var http = require('http');
var cors = require('cors');
  
var app = express();
app.use(express.bodyParser());
app.use(cors());
app.set('port', 3000);

var data = [{"firstName": "Potranca", "LastName":"Rontas"},
			{"firstName": "Billy", "LastName":"Mane"},
			{"firstName": "Broker", "LastName":"Shield"},
			{"firstName": "Suba", "LastName":"Rete"},
			{"firstName": "Paula", "LastName":"Tejano"},
			{"firstName": "Paula", "LastName":"Dentro"},
			{"firstName": "Paula", "LastName":"Fora"},
			{"firstName": "Suzy", "LastName":"Rego"},
			{"firstName": "Dora", "LastName":"Pica"}];

/* AQUI VEM TUDO DE PERFIL */
/*********************************************************/
/* recuperar */
app.get('/users', function(req, res){
	res.send(data);
});

/* salvar */
app.post('/users', function(req, res){
	data.push(req.body);
	res.send(data);
});

/* deletar */
app.delete('/users/:id', function(req, res){
	//console.log(req.params.id);
	data.splice(req.body, 1);
	res.send(data);
});


/* alterar */
app.put('/users', function(req, res){
	res.send(data);
});
/*********************************************************/
/* FIM */

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});