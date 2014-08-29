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
		it('deve somar', function() {
			var obtido = calc.soma(5, 2);
			var esperado = 7;

			expect(obtido)
        .to.equal(esperado);
		});

    it('deve concatenar duas string', function() {
      var obtido = calc.soma('ciro','ciro');
      var esperado = 'cirociro';

      expect(obtido).to.equal(esperado);
    });
	});

	describe('.mult', function () {
    /**
     * Desta vez vamos testar a resposta de uma
     * operação assíncrona, esperando seu
     * resultado (nem sempre isso será
     * necessário, como faremos mais adiante).
     *
     * Para isso utilizamos o argumento passado
     * para a função anonima que passamos para o
     * IT, a função Done que então trata de
     * avisar ao mocha a hora que a resposta
     * chega (ou avisar que houve um erro).
     */
		it('deve multiplicar assincronamente', function (done) {
			var esperado = 6;

			calc.mult(2, 3, function (e, res) {
        // Se houver um erro, basta avisar ao
        // mocha que houve um erro passando para o
        // Done o erro como argumento.
				if (e) done(e);

				expect(res)
          .to.equal(esperado);

        // tudo ocorrendo bem, basta avisar que
        // acabou
				done();
			});
		});
	});
});
