function Calc () {}

Calc.prototype.soma = function(a, b) {
	return a + b;
};

/**
 * Recebe três argumentos (a, b, cb), não
 * retorna nada, porém chama a função (cb)
 * passada algum tempo depois com o resultado da
 * operação.
 */
Calc.prototype.mult = function (a, b, cb) {
  /**
   * Executa o callback 500ms depois com o
   * primeiro argumento (erro) sendo Nulo e o
   * segundo (result) com o resultado.
   */
	setTimeout(function () {
		cb(null, a * b);
	}, 500);
};

module.exports = Calc;
