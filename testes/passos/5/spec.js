'use strict';

/**
 * Testa a interface da Calculadora.
 */

var chai = require('chai');
var chaiAP = require('chai-as-promised');
chai.use(chaiAP);
var expect = chai.expect;


describe('Calculadora', function() {

  beforeEach(function () {
    this.slow(5000);
    browser.ignoreSynchronization = true;
    browser.get('/passos/5');
  });

  it('deve ter o titulo esperado', function() {
    expect(browser.getTitle())
      .to.eventually.equal('Calculadora');
  });

  it('deve apertar numero e aparecer na tela', function () {
    var tecla1 = element(by.css('.numerico li:nth-child(1)'));
    var tecla2 = element(by.css('.numerico li:nth-child(2)'));
    var teclaMult = element(by.css('.acionadores .tecla.multiplica'));

    tecla1.click();
    teclaMult.click();
    tecla2.click();

    expect(element(by.css('#calculadora .tela input')).getAttribute('value'))
      .to.eventually.equal('1*2');
  });

  it('deve apagar o que estiver na tela', function () {
    var tecla1 = element(by.css('.numerico li:nth-child(1)'));
    var tecla2 = element(by.css('.numerico li:nth-child(2)'));
    var teclaDel = element(by.css('.acionadores .tecla.del'));
    var tela = element(by.css('#calculadora .tela input'));

    tecla1.click();
    tecla2.click();

    expect(tela.getAttribute('value'))
      .to.eventually.equal('12');

    teclaDel.click();
    teclaDel.click();

    expect(tela.getAttribute('value'))
      .to.eventually.equal('');
  });
});
