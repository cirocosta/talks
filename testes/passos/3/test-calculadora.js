/**
 * Como estamos rodando os testes no browser e
 * não queremos alterar nossa estrutura (isto é,
 * continuar rodando também no NodeJS), devemos
 * fazer algumas checagens antes de iniciarmos o
 * teste.
 * @type {[type]}
 */
var Calc = Calc || {};
var expect = expect || {};

/**
 * Dependendo do ambiente (browser ou Node)
 * tomamos determinadas decisões.
 */
if (typeof exports === 'object') {
	expect = require('chai').expect;
	Calc = require('./calculadora');
} else {
	expect = chai.expect;
}


/**
 * Feitas as checagens de ambiente, mantemos os
 * testes como estavam.
 */
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

    it('deve concatenar duas string', function() {
      var obtido = calc.soma('ciro','ciro');
      var esperado = 'cirociro';

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
