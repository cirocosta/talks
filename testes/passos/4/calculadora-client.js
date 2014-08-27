function CalcClient () {}

CalcClient.prototype.getResult = function (data) {
  return jQuery.ajax({
    type: 'POST',
    dataType: 'json',
    url: '/multiplica',
    data: data
  });
};
