/**
 * Como iremos apenas rodar em browsers reais
 * (ou headless - PhantomJS), não precisamos nos
 * preocupar com verificações de ambiente e/ou
 * requires. Tudo será injetado a uma página
 * pelo Karma antes de chegar ao teste.
 */

describe('CalcClient', function() {
  // instanciamos nosso Client
  var calc = new CalcClient();

  it('deve ser instanciavel', function() {
    expect(!!calc).to.equal(true);
  });

  describe('metodo getResults', function() {
    /**
     * O Mocha, assim como outros testadores,
     * expõe dois métodos especiais: beforeEach
     * (o equivalente do setUp em outros
     * testadores) e afterEach (equivalente ao
     * tearDown).
     *
     * Como o próprio nome deles sugere, o
     * primeiro trata de rodar qualquer código
     * passado para o mesmo ANTES da execução de
     * cada teste, enquanto o segundo, DEPOIS de
     * cada um.
     */

    /**
     * antes de cada teste pedimos ao SinonJS
     * para espiar o comportamento do método
     * 'ajax' do objeto jQuery. O que o Sinon
     * faz é adicionar certos métodos e
     * propriedades ao objeto de modo que
     * possamos conseguir certas informações
     * sobre chamadas(ou não) do método.
     */
    beforeEach(function () {
      sinon.spy(jQuery, 'ajax');
    });

    /**
     * Assim como o Sinon assinala
     * métodos/propriedades ao objeto, ele
     * também os remove (pense num Sandbox, em
     * que é preparado para que 'brinquemos' por
     * um tempo e depois seja limpo, retornando
     * ao estado original).
     */
    afterEach(function () {
      jQuery.ajax.restore();
    });

    it('deve chamar ajax', function() {
      // fazemos uma chamada em nosso método
      // (mesmo sem ter um servidor para servir a
      // resposta)
      calc.getResult('');

      // verificamos se o ajax foi chamado.
      // Partindo dessa premissa, podemos então
      // verificar depois se foi chamado com o que
      // esperavamos.
      expect(jQuery.ajax.called).to.equal(true);
    });

    it('deve chamar ajax com url correto', function() {
      // fazemos a chamada
      calc.getResult('');

      // obtemos, do argumento passado para o
      // jQuery.ajax, o campo URL.
      var obtido = jQuery.ajax.getCall(0).args[0].url;
      var esperado = 'http://localhost:3000/multiplica';

      // verificamos se bate com o que esperávamos
      // :)  Poderiamos então testar se os dados
      // (que poderíamos tratar antes) estão sendo
      // passados corretamente, etc.
      expect(obtido).to.equal(esperado)
    });
  });

});

