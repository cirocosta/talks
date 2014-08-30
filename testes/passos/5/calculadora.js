(function (root, factory) {
	if (typeof exports === 'object')
		module.exports = factory({});
	else
		root.Calc = factory(window);
})(this, function (window) {

	function Calc () {}

	Calc.prototype.soma = function(a, b) {
		return a + b;
	};

	Calc.prototype.mult = function (a, b, callback) {
		setTimeout(function () {
			callback(null, a*b);
		}, 500);
	};

  Calc.prototype.multSync = function (a, b) {
    return a * b;
  };

	return Calc;
});
