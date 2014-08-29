/**
 * Aqui criamos, como exemplo, um Client cujo
 * objeto é ser rodado exatamente no Browser.
 * Criamos seu construtor e então atribuimos ao
 * mesmo um método (de vários outros que
 * poderíamos ter).
 */
function CalcClient () {}

/**
 * Envia dados passados (argumento) para o
 * endpoint de multiplicação no Servidor
 * utilizando o método $.ajax da biblioteca
 * jQuery, muito utilizada no frontend.
 */
CalcClient.prototype.getResult = function (data) {
  return jQuery.ajax({
    type: 'POST',
    dataType: 'json',
    url: '/multiplica',
    data: data
  });
};
