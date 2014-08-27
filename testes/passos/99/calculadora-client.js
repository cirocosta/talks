function CalcClient () {}

CalcClient.prototype.getResult = function (data) {
  return $.ajax({
    type: 'POST',
    dataType: 'json',
    url: '/multiplica',
    data: data
  });
};
