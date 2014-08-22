var expect = require('chai').expect;
var Calculadora = require('./calculadora');

describe('Calculadora', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calculadora();
		expect(!!calculadora).to.equal(true);
	});
});
