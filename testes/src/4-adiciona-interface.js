// jeito correto de fazer, porem meio complicado
// para iniciantes

(function (root, factory) {
	if (typeof exports === 'object')
		module.exports = factory({});
	else
		root.Calculadora = factory(window);
})(this, function (window) {

	// nossa construcao igual à anterior

	function Calculadora () {}

	Calculadora.prototype.soma = function(a, b) {
		return a + b;
	};

	Calculadora.prototype.multiplica = function (a, b, callback) {
		setTimeout(function  {
			callback(a*b);
		}, 500);
	};

	// como anteriormente exportavamos algo, agora
	// estaremos exportando pro module.exports caso
	// seja nodeJs, pro escopo global caso seja
	// browser.

	return Calculadora;
}));

/////////////
//// teste //
/////////////

var Calculadora = Calculadora || {};
var expect = expect || {};

if (typeof exports === 'object') {
	expect = require('chai').expect;
	Calculadora = require('./calculadora');
} else {
	expect = chai.expect;
}

describe('Calculadora', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calculadora();
		expect(!!calculadora).to.be(true);
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

				expect(result).to.equal(esperado);
				done();
			});
		});
	});
});
