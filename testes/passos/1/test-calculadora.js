var expect = require('chai').expect;
var Calc = require('./calculadora');

describe('Calc', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calc();
		expect(!!calculadora).to.equal(true);
	});

  /**
   * Como vamos iniciar os testes do método soma
   * (são mais de 1 teste a serem rodados) faz
   * sentido que agrupemos eles e deixemos em um
   * escopo só deles. Isto é bom pois quando o
   * Mocha for rodar os testes ele vai
   * concatenar a descrição dos describes com a
   * descrição dos ITs, asssim, estando agrupado
   * no método soma, saberemos muito facilmente
   * onde o erro se encontra.
   */
	describe('.soma', function () {
		it('deveria somar', function() {
			var obtido = calculadora.soma(5, 2);
			var esperado = 7;

			expect(obtido).to.equal(esperado);
		});

    it('deve concatenar duas string', function() {
      var obtido = calculadora.soma('ciro','ciro');
      var esperado = 'cirociro';

      expect(obtido).to.equal(esperado);
    });
	});
});
