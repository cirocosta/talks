'use strict';

var Calc = require('./calculadora')
	,	express = require('express')
	,	bodyParser = require('body-parser')
	,	app = express();

var calculadora = new Calc();

app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/multiplica', function(req, res) {
	var resposta = {
		data: calculadora.multiplica(req.body)
	};

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resposta));
});

app.listen(3000);

console.log('Servidor Iniciado em: http://localhost:3000/');
