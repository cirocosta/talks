var expect = require('chai').expect;
var Calc = require('./calculadora');

describe('Calc', function() {

	var calc;

	it('deve ser instanciavel', function() {
		calc = new Calc();
		expect(!!calc)
      .to.equal(true);
	});

	describe('.soma', function () {
		it('deveria somar', function() {
			var obtido = calc.soma(5, 2);
			var esperado = 7;

			expect(obtido)
        .to.equal(esperado);
		});
	});

	describe('.multiplicacao', function () {
		it('deveria multiplicar assincronamente', function (done) {
			var esperado = 6;

			calc.mult(2, 3, function (e, res) {
				if (e) done(e);

				expect(res)
          .to.equal(esperado);
				done();
			});
		});
	});
});
