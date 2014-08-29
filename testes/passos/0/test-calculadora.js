/**
 * Para os testes estaremos utilizando, em
 * grande parte, o Mocha, um framework de teste
 * bastante conhecido e simples, criado pelo TJ
 * Holowaychuck, criador do que deve ser o mais
 * famoso framework de NodeJS, o ExpressJS
 * (cujos testes, naturalmente, rodam pelo
 * Mocha).
 */


/**
 * Iniciamos o mesmo obtendo nossas
 * dependencias. A primeira delas, o Chai,
 * trata-se de uma biblioteca de asserção, isto
 * é, vai nos dar os métodos que irão verificar
 * se nossas expectativas batem com o que é de
 * fato obtido através de um método da nossa
 * calculadora.
 */
var expect = require('chai').expect;
var Calc = require('./calculadora');


/**
 * Criamos nossa suíte, isto é, o conjunto de
 * testes que engloba todas as outros que
 * criemos. Com o conceito de Suites deixamos
 * claro qual o escopo daquele conjunto de
 * testes e onde eles estão contidos, além de
 * tornar evidente qual o conjunto de variáveis
 * e configurações eles partilham.
 */
describe('Calc', function() {

	var calculadora;

  /**
   * Declaramos aqui uma especificação de teste
   * (a chamada Spec) onde deve haver então uma
   * asserção que verifica se o que esperamos do
   * método realmente equivale àquilo que
   * obtemos dele dado um conjunto de condições.
   */
	it('deve ser instanciavel', function() {
		calculadora = new Calc();
		expect(!!calculadora).to.equal(true);
	});
});
