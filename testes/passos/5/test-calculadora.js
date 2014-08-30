var Calc = Calc || {};
var expect = expect || {};

if (typeof exports === 'object') {
	expect = require('chai').expect;
	Calc = require('./calculadora');
} else {
	expect = chai.expect;
}

describe('Calc', function() {

	var calc;

	it('deve ser instanciavel', function() {
		calc = new Calc();
		expect(!!calc).to.equal(true);
	});

	describe('.soma', function () {
		it('deveria somar', function() {
			var obtido = calc.soma(5, 2);
			var esperado = 7;

			expect(obtido).to.equal(esperado);
		});
	});

	describe('.multiplicacao', function () {
		it('deveria multiplicar assincronamente', function (done) {
			var esperado = 6;

			calc.mult(2, 3, function (err, result) {
				if (err) done(err);

				expect(result).to.equal(esperado);
				done();
			});
		});
	});
});
