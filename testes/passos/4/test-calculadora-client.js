describe('CalculadoraClient', function() {
  var calc = new CalculadoraClient();

  describe('metodo getResults', function() {
    beforeEach(function () {
      sinon.spy(jQuery, 'ajax');
    });

    afterEach(function () {
      jQuery.ajax.restore();
    });

    it('deve chamar ajax', function() {
      var data = [];
      calc.getResult(data);

      expect(jQuery.ajax.called).to.equal(true);
    });

    it('deve chamar ajax com url correto', function() {
      var data = [];
      calc.getResult();

      var obtido = jQuery.ajax.getCall(0).args[0].url;
      var esperado = '/multiplica';

      expect(obtido).to.equal(esperado)
    });
  });

});

