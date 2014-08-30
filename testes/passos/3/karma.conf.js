/**
 * Configuração do Karma. Trata-se do arquivo
 * gerado pelo mesmo (karma init karma.conf.js)
 * porém com os comentários traduzidos e alguns
 * outros adicionados.
 *
 * Para rodar o teste basta executar: `karma start karma.conf.js`
 */
module.exports = function(config) {
  config.set({

    // caminho base que será utilizado durante a
    // resolução dos padrões passados (quanto aos
    // arquivos/exclusões)
    basePath: '',


    // Frameworks a utilizar.
    // lista de disponíveis:
    // https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],


    // lista os arquivos/padrões a serem utilizados para a utilização no Browser.
    files: [
        "../../node_modules/chai/chai.js",
        "calculadora.js",
        "test-*.js"
    ],


    // Lista de arquivos (podendo-se passar
    // padroões) para serem excluidos (não
    // utilizados)
    exclude: [
    ],


    // Executam algum tipo de trabalho antes que
    // os arquivos sejam servidos para o browser.
    // veja os preprocessadores disponiveis em:
    // https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // Reporter a ser utilizado para
    // disponibilizar as informações. Ver os
    // reporters em:  available reporters:
    // https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // Porta do servidos
    port: 9876,


    // habilitar/desabilitar as cores no output do
    // karma.
    colors: true,


    // Nivel de Logging
    // Valores disponíveis: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // Habilita/desabilita o 'watching' de modo
    // que sejam rodados os testes ao salvar
    // qualquer arquivo observado.
    autoWatch: true,


    // Browsers a serem inicializados para rodas
    // os testes. available browser launchers:
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox', 'Chrome', 'PhantomJS'],


    // Rodas os testes apenas uma vez e sair (ou
    // não).
    singleRun: false
  });
};
