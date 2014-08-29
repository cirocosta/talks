function Calc () {}

/**
 * Agora adicionamos a nossa Calculadora uma
 * função de Soma.
 *
 * Ela irá receber dois parâmetros (a, b) e
 * então retornar a soma dos mesmos.
 */
Calc.prototype.soma = function(a, b) {
	return a + b;
};

module.exports = Calc;
