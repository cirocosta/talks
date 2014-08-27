function Calc () {}

Calc.prototype.soma = function(a, b) {
	return a + b;
};

Calc.prototype.multiplica = function (a, b, callback) {
	setTimeout(function () {
		callback(null, a*b);
	}, 500);
};

module.exports = Calc;
