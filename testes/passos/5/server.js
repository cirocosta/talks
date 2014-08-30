'use strict';
/**
 * Exemplo de servidor utilizando nossa
 * calculadora
 */

var Calc = require('./calculadora')
	,	express = require('express')
  , logger = require('morgan')
	,	bodyParser = require('body-parser')
	,	app = express();

var calculadora = new Calc();

app.use(logger('dev'));
app.use('/', express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/multiplica', function(req, res) {
	var resposta = {
		data: calculadora.multSync(req.body.a, req.body.b)
	};

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(resposta));
});

app.listen(3000);

console.log('Servidor Iniciado em: http://localhost:3000/');
