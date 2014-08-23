jQuery(function () {
  var $calc = jQuery('#calculadora');
  var $tela = jQuery('.tela input', $calc);

  jQuery('.tecla.igual', $calc).click(function (e) {
    getResult($tela.val().split('*'));
  });

  jQuery('.tecla', $calc).click(function (e) {
    var tipo = tecla = $(this).text();
    var valorTela = $tela.val();

    if (!isNaN(+tecla))
      tipo = 'NUM';

    switch (tipo) {
      case 'NUM':
        $tela.val($tela.val() + tecla);
        break;

      case 'DEL':
        if (valorTela)
          $tela.val(valorTela.substring(0, valorTela.length - 1));
        break;

      case '*':
        $tela.val($tela.val() + tecla);
        break;

      case '=':
        console.log("igual");
        break;
    }
  });

});
