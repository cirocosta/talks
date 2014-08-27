var expect = require('chai').expect;
var Calc = require('./calculadora');

describe('Calc', function() {

	var calculadora;

	it('deve ser instanciavel', function() {
		calculadora = new Calc();
		expect(!!calculadora).to.equal(true);
	});
});
