# CasperJS

> Ferramenta open-source de navegação por script & test-framework escrita em Javascript para o browser headless PhantomJS (Webkit) e SlimerJS (Gecko). Facilita o processo de definir um cenário completo de navegação.

Instalá-lo é uma tarefa fácil: basta ter instalado um dos dois (ou ambos) os engines e então executar `npm install -g casperjs`.

Assim como o PhantomJS, **NÃO** se trata de um pacote NodeJS. É escrito basicamente em Javascript e Python (PhantomJS --> C++).

É possível (e facilitado) simular cliques com mouse, inserção de texto em html nodes, capturar logs, entre outros.

## Contras

Apesar de ainda ser "mais friendly", ainda assim não é node-ready. Podemos questionar então: se o problema é o QtWebKit não ter seu ambiente javascript compartlhado com o V8 e o node-phantomjs "resolve" isso, porque o casper não poderia ter um node-casperjs?

Segundo seu criador: *I don't plan to make CasperJS compatible with phantomjs-node because it uses  alert()-based dirty hacks I'm not easy with.*

Aparentemente havia uma alternativa, o [SpookyJS](https://github.com/WaterfallEngineering/SpookyJS) que utilizando de um transport por http fazia a comunicação. Como não há suporte para Ubuntu-based e Windows, não fiz nenhum teste (o projeto também parece não estar sendo mais mantido).

### tl;dr

> não se liga com nodejs e não há planos para tal


## Features

-	defining & ordering browsing navigation steps
-	filling & submitting forms
-	clicking & following link
s-	capturing screenshots of a page (or part of it)
-	testing remote DOM
-	logging events
-	downloading resources, including binary ones
-	writing functional test suites, saving results as JUnit XML
-	scraping Web contents
