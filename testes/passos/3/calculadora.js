// jeito correto de fazer, porem meio complicado
// para iniciantes

(function (root, factory) {
	if (typeof exports === 'object')
		module.exports = factory({});
	else
		root.Calculadora = factory(window);
})(this, function (window) {

	// nossa construcao igual à anterior

	function Calculadora () {}

	Calculadora.prototype.soma = function(a, b) {
		return a + b;
	};

	Calculadora.prototype.multiplica = function (a, b, callback) {
		setTimeout(function () {
			callback(null, a*b);
		}, 500);
	};

	// como anteriormente exportavamos algo, agora
	// estaremos exportando pro module.exports caso
	// seja nodeJs, pro escopo global caso seja
	// browser.

	return Calculadora;
});
