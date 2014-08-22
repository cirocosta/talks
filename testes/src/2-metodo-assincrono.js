function Calculadora () {}

Calculadora.prototype.soma = function(a, b) {
	return a + b;
};

Calculadora.prototype.multiplica = function (a, b, callback) {
	setTimeout(function  {
		callback(a*b);
	}, 500);
};

// Calculadora.prototype.multiplica = function(a, b) {
// 	return a * b;
// };

module.exports = Calculadora;

//// teste

var assert = require('assert');
var Calculadora = require('./calculadora');

describe('Calculadora', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calculadora();
		assert(!!calculadora);
	});

	describe('.soma', function () {
		it('deveria somar', function() {
			var obtido = calculadora.soma(5, 2);
			var esperado = 7;

			assert.equal(obtido, esperado);
		});
	});

	describe('.multiplicacao', function () {
		it('deveria multiplicar assincronamente', function (done) {
			var esperado = 6;

			calculadora.multiplica(2, 3, function (err, result) {
				if (err) done(err);

				assert.equal(result, esperado);
				done();
			});
		});
	});
});
