'use strict';

/**
 * Testa a interface da Calc.
 */

var chai = require('chai');
/**
 * Aqui adicionamos mais uma biblioteca, a
 * chai-as-promised que adiciona então o
 * 'eventually' para nossas asserções. Isso
 * facilita muito para testar Promesas já que
 * não temos que escrever de fato as funcoes
 * para Resolve e Reject.
 */
var chaiAP = require('chai-as-promised');
chai.use(chaiAP);
var expect = chai.expect;


describe('Calc', function() {
  // configuramos um timeout maior que o normal
  // pois para rodar na interface o tempo é maior
  // do que o utilizado no unittest e outros que
  // rodam mais rapidamente.
  this.timeout(6000);

  /**
   * Antes de cada teste iniciar iremos settar
   * algumas coisas: que deve-se ignorar a
   * sincronizacao (o protractor espera lidar
   * com Angular, como nao estamos fazendo isso,
   * podemos tirar) e fazer com que o browser vá
   * para alguma página desejada (a partir do
   * BasePath passado na configuracao)
   */
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get('/passos/5');
  });

  // Varias sao as coisas que podemos checar,
  // sendo uma delas, o titulo, p.ex
  it('deve ter o titulo esperado', function() {
    expect(browser.getTitle())
      .to.eventually.equal('Calc');
  });

  it('deve apertar numero e aparecer na tela', function () {
    // Protractor expoe o `element` que encapsula
    // os metodos para simular um usuario agindo
    // com algum tipo de elemento da interface.
    // Com o 'by' conseguimos fazer buscas de
    // elementos.
    var tecla1 = element(by.css('.numerico li:nth-child(1)'));
    var tecla2 = element(by.css('.numerico li:nth-child(2)'));
    var teclaMult = element(by.css('.acionadores .tecla.multiplica'));

    // o click nao trata-se apenas de um .click()
    // de javascript comum, mas sim uma simulação
    // real de click enviada pelo webdriver.
    tecla1.click();
    teclaMult.click();
    tecla2.click();

    // verificamos se nossa expectativa confere.
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

  it('deve apertar numero e aparecer na tela', function () {
    // Protractor expoe o `element` que encapsula
    // os metodos para simular um usuario agindo
    // com algum tipo de elemento da interface.
    // Com o 'by' conseguimos fazer buscas de
    // elementos.
    var tecla1 = element(by.css('.numerico li:nth-child(1)'));
    var tecla2 = element(by.css('.numerico li:nth-child(2)'));
    var teclaMult = element(by.css('.acionadores .tecla.multiplica'));
    var teclaIgual = element(by.css('.acionadores .tecla.igual'));

    // o click nao trata-se apenas de um .click()
    // de javascript comum, mas sim uma simulação
    // real de click enviada pelo webdriver.
    tecla1.click();
    teclaMult.click();
    tecla2.click();
    teclaIgual.click();

    // verificamos se nossa expectativa confere.
    expect(element(by.css('#calculadora .tela input')).getAttribute('value'))
      .to.eventually.equal('2');
  });

});
