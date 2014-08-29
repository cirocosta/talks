/**
 * Seguindo em partes o pregado pelo padrão UMD
 * (Universal Module Definition) tornamos
 * possível então exportar nosso módulo tanto
 * para os browsers quanto para o Node sem haver
 * alteração no código.
 */
(function (root, factory) {
	if (typeof exports === 'object')
		module.exports = factory({});
	else
		root.Calc = factory(window);
})(this, function (window) {

  /**
   * Mantemos nosso constructor e as definicoes
   * de métodos exatamente como nos anteriores.
   */
	function Calc () {}

	Calc.prototype.soma = function(a, b) {
		return a + b;
	};

	Calc.prototype.multiplica = function (a, b, callback) {
		setTimeout(function () {
			callback(null, a*b);
		}, 500);
	};

  // como anteriormente exportavamos algo, agora
  // estaremos exportando pro module.exports caso
  // seja nodeJs, pro escopo global caso seja
  // browser.

	return Calc;
});
