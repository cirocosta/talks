# Testing for the great web!

## Blá Blá Blá

### Introdução - Javascript Rules!

Javascript é uma linguagem de alto nível, excelente para scripiting (assim como diz em seu próprio nome), o que também nos torna muito produtivos, podendo criar várias coisas rapidamente, especialmente no ínicio de um projeto. Sua natureza extremamente dinâmica, entretando, faz com que enfrentemos grandes problemas ao construir grandes projetos. Isto ocorre ainda mais na Web, onde Recorrentemente percebemos várias diferenças entre implementações por parte dos navegadores - ainda mais quando isto se relaciona ao DOM. Mesmo fora do contexto puramente web, javascript não tem 'tools' nativas que diminuiriam erros, tais como static typings, erros de compilação e acesso indevido.

Várias sao as formas para tentarmos melhorar o ecosistema de desenvolvimento web:
-	Padrões (W3C, TC39)
-	bibliotecas (jQuery, DOJO, YUI)
-	Frameworks (Angular, Ember ...)
-	Transpillers
- TESTES!

Mas, porquê testes de fato melhoram o desenvolvimento?

### Porquê testas?

1. prova-se que o código está correto (ou errado)
	1.1 Assim como, na mão, depois de codarmos nós vamos à sua execução ver se ele está funcionando como deveria, com os testes automatizados nós temos isso (inclusive com nomeclatura muito parecida em BDD). TDD Realmente trata-se apenas de tornar esse processo automatizado.

2. evita-se regressões
	2.1 Regression Bug - voltar a implementar um bug que já havia sido tratado no passado e então volta a ocorrer. Uma vez que temos testes automatizados rodando durante o desenvolvimento corremos muito menos este risco pois (3):

3. Feedback rápido:
	3.1 com testes automatizados temos o poder dos feedbacks imediatos. Se você introduziu um problema, rapidamente vai consertar e não vai propagar isso por todo o código (erros tendem a ser cumulativos quando não detectados rapidamente). Ao introduzir uma mudança na base de código consegue-se rodar no mesmo instante o teste que comprova que tal adição não 'estraga' o resto. Quanto mais confiança você consiga ter, mais pode ousar no código. ![thiaguinho](http://imagem-thiaguinho.com)

4. refatoramento seguro -
	4.1 dado que em um momento uma função tem seus testes passando, para o mesmo input e output nela e mantendo os testes, o que refatorarmos internamente deve fazer os testes continuarem passando. Com tais premissas conseguimos rapidamente remover código que não altera resposta (supondo que o teste cubra bem os casos). Em projetos abertos isso conta muito para a atração de novos colaboradores já que os mesmos podem ter certeza que não estão estragando o código do projeto (ninguém quer levar culpa).

5. testes geram documentação -
	5.1 um teste bem escrito conta uma história. Uma história sobre o uso do código. Melhor ainda que documentação, a documentação por testes sempre está atualizada.

6. Melhores decisões de design -
	6.1 testar não trata-se unicamente de escrever testes, mas principalmente de produzir código testável. Isto leva a código 'loosely coupled' com dependencies explícitas. Mais do que isso, a prática do TDD leva a melhor 'Separation of Concerns' - diferentes partes do projeto terão diferentes custos, tais como networking, levando a diferentes Tipos de testes (o desenvolvedor precisa então conseguir tornar isto isolável). Somando isto tudo, um código testável segue melhor o Príncipio da responsabilidade Única. (Singleton sucks!)

7. É [magia!](https://www.youtube.com/watch?v=uHoB0KzQGRg#t=2086)!


### Ok, e o que o NodeJS tem a ver com isso?

Com NodeJS conseguimos ter uma grande facilidade na configuração do ambiente e o modo de se obter os resultados dos testes. Para que se tenha imbutido em uma equipe a prática do TDD é **extremamente** necessário que todos se sintam confortáveis com o ambiente, isto é, que seja fácil de instalar onde ele já está acostumado e sejam mínimos os passos para se ter algo funcional.

Além disso, é importante que seja fácil de instalar em qualquer lugar literalmente. Buildar projetos grandes e testar em uma grande gama de devices geralmente toma tempo e consome muitos recursos. (//TODO pegar estatísticas do keynote do GTAC 2013 sobre o Google) O aumento na gama de diferentes ambientes para se testar e buildar levou então ao uso de CI para isso. É necessário então que a configuração do mesmo seja fácil, de modo que encorage-se o uso de testes. //TODO formular melhor.

Testar o backend também é extremamente importante. Sua API deve estar retornando o esperado, os métodos então devem estar escrevendo na DB como deveriam, as queries funcionando ... etc. (Supondo o setUp e tearDown de conexão teste).


## Cool Stuff!

Como geralmente talks sobre testes costumam ser cansativos e pouco divertidos, imaginei que seria divertido colocar alguma ação:

### Passo 0 - Vamos Criar uma Calculadora!

Tenho um disclaimer a fazer ... na verdade programar é um "hobby" que por sinal levo bem a sério, minha área de estudo formal é a Atuária - muito disconhecida, estudamos risco financeiro --> muita matemática --> só poderia criar uma calculadora.

Uma calculadora é algo muito simples. Temos um objeto que possui dois métodos primitivos, soma e multiplicação (a partir destes dois derivam-se outros).


```
Calculadora

export-> calculadora
```

Neste passo criamos um constructor pra classe, de modo que possamos obter um Objeto, definimos o que desejamos exportar àqueles que desejem requerir algo deste arquivo. Isto é importante pois nosso arquivo de testes irá fazer isso.

Para os testes em Node irei ilustrar primeiramente o Mocha, um framework de teste bastente parecido com outro bem conhecido, o Jasmine, que tem uma pegada mais voltada eu BDD (//TODO procurar sobre BDD). Existem vários outros (assim como tudo em node, há varios), incluindo alguns que rodam testes em paralelo (facebook/jest, p.ex) sendo o Mocha o mais simples (em minha opiniao) para se trabalhar.

O Mocha, assim como outros frameworks de testes trabalha com encapsulamento por meio dos `Describes`, que expõe qual o escopo daquela suite - conjunto - de testes. O `it` então trata-se do teste em si, onde deve haver uma asserção (afirmação --- a palavra de fato existe). Vale lembrar que por se tratarem de funções quaisquer, qualquer código executável de javascript pode ser declarado alí.


### Passo 1 - Métodos na Calculadora

Uma calculadora sem função alguma não serve para nada. Vamos então adicinar o método soma. Mais uma vez criei então um contexto, desta vez para o soma. Não se trata de algo necessário mais isso aumenta a organização dos testes, o que é algo importante à medida que se tem vários e identificar facilmente qual teste falhou trata-se de algo importante. Para o soma então poderíamos ter vários testes: se quando passamos somente um argumento ele levante uma exception, se passsando strings ele realmente parseia pra INT e aplica a soma, entre vários outros. Aqui testo apenas o mais intuitivo.


### Passo 2 - Método Assíncrono

O Mocha possui uma interface bastante favorável a testes com funções assíncronas. Há basicamente dois modos de testar este tipo de função:

1. passar a função de callback, aguardar o resultado e fazer um assert
2. fazer um 'stub', isto é, um código que simula comportamento da função e então expõe como a mesma foi chamada. // acho que não é hora de falar disso. Deixa para a parte do jQuery

Para a primeira basta utilizar o `done`, função passada como callback do `it`que deve ser então chamado para sinalizar que a chamada terminou.


Para a segunda podemos utilizar uma biblioteca feita para isso: SinonJS. O SinonJS busca introduzir três conceitos à testes: spying, stubbing, mocking.
//TODO continuar nisso


### Passo 3 - Joga os testes e a lib para o Browser

//TODO comentar algo sobre browserify ?

Falar que existe um pattern (UMD) para tornar as coisas mais 'universal', porém não entrar em detalhes.

Vêmos, primeiro manualmente, o resultado dos testes. Isto poderia ser feito mas como estamos falando de Node, feedback rápido e automação, isto não é bem o que buscamos.

Falar algo sobre o Karma, mostrar seu arquivo de configuração e falar um pouco sobre o que pode ser feito com o mesmo (quanto à configuração mesmo... e lembrar que pode-se escrever plugins para o mesmo).

*ps.: também pode-se levantar um IE para testes com o karma. Há um launcher para isso :)))*

Levanto então o Karma para rodar no Firefox e no Chrome.

Avisar: como ficar verificando manualmente não é nosso objetivo, deixamos de lado então essa página de testes manuais do Karma.


### Passo 4 - Interface para calculadora  --- testes $.Ajax

Temos uma interface e um servidor por trás. Usamos jQuery para falar com esse servidor. Ainda assim ... da para testar Métodos do jQuery? SIM.

SinonJS to the rescue!


### Passo 5 - Testes de Interface

Temos os métodos de interação com a interface já todos testados, temos certeza de que estamos fazendo as chamadas corretamente. Dá para testar a INTERFACE EM SI?

SIM.

Nightwatch, Protractor


## Blá BLá

### Karma - testando em browsers de verdade

Há muitos problemas entre browsers diferentes e, como esperado, o problema de testes é exatamente capturar os erros. Precisamos então de um ambiente que facilite o teste em diferentes browsers de maneira rápida, de modo que possamos aproveitar os features de testes rápidos como descrito acima.


### Testes de vários tipos

Testes tomam vários 'levels'. Desde um muito focado (os testes unitários) até testes que testam exatamente a interação do usuário (end2end tests).
