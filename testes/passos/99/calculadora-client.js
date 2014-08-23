function CalculadoraClient () {}

CalculadoraClient.prototype.getResult = function (data) {
  return $.ajax({
    type: 'POST',
    dataType: 'json',
    url: '/multiplica',
    data: data
  });
};
