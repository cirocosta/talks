function Calculadora () {}

Calculadora.prototype.soma = function(a, b) {
	return a + b;
};

// Calculadora.prototype.multiplica = function(a, b) {
// 	return a * b;
// };

module.exports = Calculadora;

//// teste

var expect = require('chai').expect;
var Calculadora = require('./calculadora');

describe('Calculadora', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calculadora();
		expect(!!calculadora).to.be(true);
	});

	describe('.soma', function   {
		it('deveria somar', function() {
			var obtido = calculadora.soma(5, 2);
			var esperado = 7;

			expect(obtido).to.equal(esperado);
		});
	});
});
