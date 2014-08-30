/**
 * Arquivo de configuração de testes E2E para o
 * Protractor. Mais informações sobre o mesmo
 * podem ser encontradas na documentacao no
 * repositório angular/protractor (GitHub).
 * @see
 * https://github.com/angular/protractor/blob/master/docs/referenceConf.js
 */

exports.config = {
  /**
   * Qual framework pretendemos utilizar. Pode
   * ser jasmine/cucumber/mocha. Para
   * consistência com o framework de teste
   * utilizado até agora, ficamos com o Mocha.
   */
  framework: 'mocha',
  /**
   * Caminho (glob) para os specs de E2E
   * relativos ao local deste arquivo de
   * configuração.
   */
  specs: [
    'spec.js',
  ],

  /**
   * Propriedades a serem passadas para o
   * Selenium (@see
   * https://code.google.com/p/selenium/wiki/DesiredCapabilities)
   */
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
        'args': [
          'incognito',
          'disable-extensions',
          'start-maximized',
          'enable-crash-reporter-for-testing',
          'disable-web-security'
        ]
    },
    'loggingPrefs': {
      'browser': 'ALL'
    }
  },

  /**
   * Ponto de inicio de nossa aplicacao, de modo
   * que a resolucao de paths relativos seja
   * feita a partir deste ponto.
   */
  baseUrl: 'http://localhost:8080/passos/5'
};
