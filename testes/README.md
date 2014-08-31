# Testando com NodeJS

Para pode rodar os testes corretamente e poder visualizar os `.html`, execute:

```sh
$ npm install
```

de modo que todas as dependencias necessárias sejam baixadas.


## Testando

Como todo o conteúdo desta palestra, sobre testes automatizados, é testável, para rodar todos de uma vez basta executar a task de testes do `gulpfile.js` presente:

```sh
$ gulp test
```

## Extra

Ao organizar a palestra busquei por mais informações a cerca de alguns softwares, segue abaixo alguns tópicos coletados.

### PhantomJS

> Browser headless (usando Webkit) com API de script em Javascript.

- **NÃO** se trata de um framework de tests.

- **NÃO** se trata de um módulo NodeJS (não se trata de binding para o código C++, mas sim um executável em 'self-contained') - mas existe um pacote chamado [phantomjs-node](https://github.com/sgentle/phantomjs-node) que provém uma api bem legal para tratá-lo como módulo!

- roda no Travis/Jenkins :)

> One major use case of PhantomJS is headless testing of web applications. It is suitable for general command-line based testing, within a precommit hook, and as part of a continuous integration system.

Empacota o WebKit todo --> buildar tomaria muito tempo, a melhor maneira é trabalhar com um binário pronto. Os ['features' suportados](https://github.com/ariya/phantomjs/wiki/Supported-Web-Standards) pela versão do webkit utilizada pelo Phantom pode ser obtida na página do [QtWebKit](http://trac.webkit.org/wiki/QtWebKitFeatures22). Em suma, não suporta: flash, webgl, video e audio, css-3d.

Assim como recomendado pelos próprios criadores, escrever scripts puros para PhantomJS não é tão 'legal'. Seu real poder vem quando combinado com algum framework de testes com interface para tal.

#### Install

Bastante fácil, há um wrapper para sua instalação por npm. Basta: `npm install -g phantomjs`

####  Usos interessantes:

- Uso para renderizar cards no Trello
- Uso para testes de regressão (PhantomCSS)
- Uso para verificação de numero de requisições e outros de networking (integra-se com YSlow)
-	Renderização de SVG/Canvas/Geração de PDF (p.ex, gitprint, p.ex slippy -> convertendo apresentações HTML para Pdf)


### Karma

#### Features

-	testar o código em browsers DE VERDADE (incluindo phones/tablets) e também browser headless (PhantomJS).

-	Agnóstico em relação ao framework a utilizar - depende de um adapter específico, apenas

-	Integrável com [jenkins](http://karma-runner.github.io/0.12/plus/jenkins.html)/[travis](http://karma-runner.github.io/0.12/plus/travis.html)


#### Install

Instalar o karma é bastante simples. Basta baixar o pacote npm e então os plugins para os browsers

```sh
$ npm install karma karma-chrome-launcher karma-jasmine --save-dev
```

Feito isto basta então gerar o arquivo de configuração do mesmo:

```sh
$ karma init karma-conf.js
```

e então iniciá-lo:

```sh
$ karma start karma-conf.js
```


### CasperJS

> Ferramenta open-source de navegação por script & test-framework escrita em Javascript para o browser headless PhantomJS (Webkit) e SlimerJS (Gecko). Facilita o processo de definir um cenário completo de navegação.

Instalá-lo é uma tarefa fácil: basta ter instalado um dos dois (ou ambos) os engines e então executar `npm install -g casperjs`.

Assim como o PhantomJS, **NÃO** se trata de um pacote NodeJS. É escrito basicamente em Javascript e Python (PhantomJS --> C++).

É possível (e facilitado) simular cliques com mouse, inserção de texto em html nodes, capturar logs, entre outros.

#### Contras

Apesar de ainda ser "mais friendly", ainda assim não é node-ready. Podemos questionar então: se o problema é o QtWebKit não ter seu ambiente javascript compartlhado com o V8 e o node-phantomjs "resolve" isso, porque o casper não poderia ter um node-casperjs?

Segundo seu criador: *I don't plan to make CasperJS compatible with phantomjs-node because it uses  alert()-based dirty hacks I'm not easy with.*

Aparentemente havia uma alternativa, o [SpookyJS](https://github.com/WaterfallEngineering/SpookyJS) que utilizando de um transport por http fazia a comunicação. Como não há suporte para Ubuntu-based e Windows, não fiz nenhum teste (o projeto também parece não estar sendo mais mantido).

#### Features

-	defining & ordering browsing navigation steps
-	filling & submitting forms
-	clicking & following link
s-	capturing screenshots of a page (or part of it)
-	testing remote DOM
-	logging events
-	downloading resources, including binary ones
-	writing functional test suites, saving results as JUnit XML
-	scraping Web contents

#### tl;dr

> não se liga com nodejs e não há planos para tal


