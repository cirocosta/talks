function Calc () {}

Calc.prototype.soma = function(a, b) {
	return a + b;
};

Calc.prototype.mult = function (a, b, cb) {
	setTimeout(function () {
		cb(null, a * b);
	}, 500);
};

module.exports = Calc;
