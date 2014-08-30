function CalcClient () {}

CalcClient.prototype.getResult = function (data, cb) {
  return jQuery.ajax({
    type: 'POST',
    dataType: 'json',
    // deixando o path inteiro para o protractor
    // fazer request de fora
    url: 'http://localhost:3000/multiplica',
    data: data
  }).done(cb).fail(cb);
};
