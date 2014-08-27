var expect = require('chai').expect;
var Calc = require('./calculadora');

describe('Calc', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calc();
		expect(!!calculadora).to.equal(true);
	});

	describe('.soma', function () {
		it('deveria somar', function() {
			var obtido = calculadora.soma(5, 2);
			var esperado = 7;

			expect(obtido).to.equal(esperado);
		});
	});

	describe('.multiplicacao', function () {
		it('deveria multiplicar assincronamente', function (done) {
			var esperado = 6;

			calculadora.multiplica(2, 3, function (err, result) {
				if (err) done(err);

				console.log(result);

				expect(result).to.equal(esperado);
				done();
			});
		});
	});
});
