function Calculadora () {}

Calculadora.prototype.soma = function(a, b) {
	return a + b;
};

Calculadora.prototype.multiplica = function (a, b, callback) {
	setTimeout(function () {
		callback(null, a*b);
	}, 500);
};

module.exports = Calculadora;
