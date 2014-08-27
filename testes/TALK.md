# Testing for the great web!

## Blá Blá Blá

### Introdução - Javascript Rules!

Esse talk é logo depois do almoço, então tentei deixar o mais intuitivo e com menos blá blá blá possível. Vou tentar primeiramente convencê-los (àqueles que talvez não curtam, ou realmente não connheçam ou talvez apenas pra gerar uma discussão fazendo então que todo mundo aprenda.


Já vou começar com uma história.


A primeira vez que eu escrevi um Teste deve ter sido bastante parecida com a de muita gente: já tinha um projeto que estava ficando grande e díficil de manter, resolvia um bug e criava outros dois, o que cria uma situação de muita raiva e pouca produtividade.

#### Javascript ... Liberdade .. Problemas

Esses problemas de bugs que aparecem do nada são ainda mais facilitados em linguagens bastante dinâmicas como Javascript.


Javascript é uma linguagem de alto nível, excelente para scripiting (assim como diz em seu próprio nome), o que também nos torna muito produtivos, podendo criar várias coisas rapidamente, o que é notável especialmente no ínicio de um projeto. Já que a linguagem tem essa natureza extremamente dinâmica, isso, faz com que a gente enfrente grandes problemas ao construir projetos maiores. Isto ocorre ainda mais na Web, onde Recorrentemente percebemos várias diferenças entre implementações por parte dos navegadores - ainda mais quando isto se relaciona ao DOM. Mesmo fora do contexto puramente web, que é o caso dessa conferẽncia de hoje - explorar também o conetxto não-web - javascript não tem, por si só, várias das 'tools' nativas que diminuiriam erros, tais como static typings, erros de compilação e acesso indevido, entre vários outros problemas. O bom é que hoje em dia temos ferramentas para lidar com isso e boas práticas também.

Várias sao as formas para tentarmos melhorar o ecosistema de desenvolvimento web:
-	Padrões (W3C, TC39)
-	bibliotecas (jQuery, DOJO, YUI)
-	Frameworks (Angular, Ember ...)
-	Transpillers
- TESTES!

Mas, porquê testes de fato melhoram o desenvolvimento?


#### O que são testes?

> Testing can never completely identify all the defects within software.[3] Instead, it furnishes a criticism or comparison that compares the state and behavior of the product against oracles—principles or mechanisms by which someone might recognize a problem. These oracles may include (but are not limited to) specifications, contracts,[4] comparable products, past versions of the same product, inferences about intended or expected purpose, user or customer expectations, relevant standards, applicable laws, or other criteria.

#### Porquê testar?

1. Menor Incerteza - prova-se que o código está "correto"

	1.1 Assim como, na mão, depois de codarmos nós vamos à sua execução ver se ele está funcionando como deveria, com os testes automatizados nós temos isso (inclusive com nomeclatura muito parecida em BDD). TDD Realmente trata-se apenas de tornar esse processo automatizado.

	1.1.1 ps: correto está entre aspas pois corretude pode variar em várias formas. Por exemplo um código pode gerar o output esperado mas não ser eficiente, o que levaria, em muitos casos, mostrar que isto o mesmo não está correto. É interessante notar que esse comportamento incorreto seria também detectável!

2. evita-se regressões

	2.1 Regression Bug - voltar a implementar um bug que já havia sido tratado no passado e então volta a ocorrer. Uma vez que temos testes automatizados rodando durante o desenvolvimento corremos muito menos este risco pois (3):

3. Feedback rápido:

	3.1 com testes automatizados temos o poder dos feedbacks imediatos. Se você introduziu um problema, rapidamente vai consertar e não vai propagar isso por todo o código (erros tendem a ser cumulativos quando não detectados rapidamente). Ao introduzir uma mudança na base de código consegue-se rodar no mesmo instante o teste que comprova que tal adição não 'estraga' o resto. Quanto mais confiança você consiga ter, mais pode ousar no código. ![thiaguinho](http://imagem-thiaguinho.com)

	3.2 refatoramento seguro - dado que em um momento uma função tem seus testes passando, para o mesmo input e output nela e mantendo os testes, o que refatorarmos internamente deve fazer os testes continuarem passando. Com tais premissas conseguimos rapidamente remover código que não altera resposta (supondo que o teste cubra bem os casos). Em projetos abertos isso conta muito para a atração de novos colaboradores já que os mesmos podem ter certeza que não estão estragando o código do projeto (ninguém quer levar culpa).

4. testes geram documentação -

	4.1 um teste bem escrito conta uma história. Uma história sobre o uso do código. Melhor ainda que documentação, a documentação por testes sempre está atualizada.

5. Melhores decisões de design -

	5.1 testar não trata-se unicamente de escrever testes, mas principalmente de produzir código testável. Isto leva a código 'loosely coupled' com dependencies explícitas. Mais do que isso, a prática do TDD leva a melhor 'Separation of Concerns' - diferentes partes do projeto terão diferentes custos, tais como networking, levando a diferentes Tipos de testes (o desenvolvedor precisa então conseguir tornar isto isolável). Somando isto tudo, um código testável segue melhor o Príncipio da responsabilidade Única. (Singleton sucks!)

6. É [magia!](https://www.youtube.com/watch?v=uHoB0KzQGRg#t=2086)!


### Ok, e o que o NodeJS tem a ver com isso?

Com NodeJS conseguimos ter uma grande facilidade na configuração do ambiente e o modo de se obter os resultados dos testes. Para que se tenha imbutido em uma equipe a prática do TDD é **extremamente** necessário que todos se sintam confortáveis com o ambiente, isto é, que seja fácil de instalar onde ele já está acostumado e sejam mínimos os passos para se ter algo funcional.

Além disso, é importante que seja fácil de instalar em qualquer lugar literalmente. Buildar projetos grandes e testar em uma grande gama de devices geralmente toma tempo e consome muitos recursos. (//TODO pegar estatísticas do keynote do GTAC 2013 sobre o Google) O aumento na gama de diferentes ambientes para se testar e buildar levou então ao uso de CI para isso. É necessário então que a configuração do mesmo seja fácil, de modo que encorage-se o uso de testes. //TODO formular melhor.

Testar o backend também é extremamente importante. Sua API deve estar retornando o esperado, os métodos então devem estar escrevendo na DB como deveriam, as queries funcionando ... etc. (Supondo o setUp e tearDown de conexão teste).


## Cool Stuff!

Como geralmente talks sobre testes costumam ser cansativos e pouco divertidos, imaginei que seria divertido colocar alguma ação:

### Passo 0 - Vamos Criar uma Calculadora!

Tenho um disclaimer a fazer ... na verdade programar é um "hobby" que por sinal levo bem a sério, minha área de estudo formal é a Atuária - muito disconhecida, estudamos risco financeiro --> muita matemática --> só poderia criar uma calculadora.


//TODO colocar algumas imagens do logo dos frameworks
Para os testes em Node irei ilustrar primeiramente o Mocha, um framework de teste bastente conhecido e também simples. Foi mantido por muito tempo plelo TJ Holowaychuck, criador do que deve ser o mais famoso framework e acredito que maioria deve conhecer, o Express, cujos testes, naturalmente, são rodados pelo Mocha. Há vários outros bastante conhecidos, tal como o Jasmine (quem curte Angular deve conhecer, JEST do Facebook - agora utilizado bastante com React) mas ainda assim sendo o Mocha o mais simples (em minha opiniao) para se trabalhar.

Começando então com o código :smile:

Nesse primeiro passou vou tentar falar linha a linha já que talvez seja um tanto quanto diferente para quem não está nada acostumado com testes.

Primeiro estou dando um `require` no [Chai](http://chaijs.com/) que se trata de uma biblioteca de asserção, isto é, vai nos dar os métodos que irão testar se nossas expectativas batem com o que é de fato obtido através de um método. Estou utilizando essa em si por que ela nos dá grande verbosidade, fica muito próximo da linguagem natural a forma com que as asserções são feitas.

Em seguida obtenho nossa Calculadora.

O Mocha, assim como outros frameworks de testes trabalha com encapsulamento por meio dos `Describes`, que expõe qual o escopo daquela suite - conjunto - de testes. O `it` então trata-se do teste em si, onde deve haver uma asserção (afirmação --- a palavra de fato existe). Vale lembrar que por se tratarem de funções quaisquer, qualquer código executável de javascript pode ser declarado alí.

Vamos então ver se o teste passa:

... FAIL

Puxa, nosso teste falhou! Podemos ver no reporter então quais foram as especificações que falharam e no escopo de qual objeto isso ocorreu. Dessa forma a gente consegue detectar rapidamente onde esta a falha.

Vamos então ver no código da calculadora o que pode ter ocorrido:

... Tudo comentado, objeto `{}` sendo exportado do `calculadora.js`.


Como tinha falado sobre o feedback rápido, algo legal que o mocha já tem embutido é um Watcher, que analisa os arquivos importantes ao teste e então, toda vez que ocorrer alguma modificação neles, roda os testes novamente nos mostrando então se tal alteração no arquivo fez o teste passar ou não.

Tendo o teste passado, i.e, mostrando que nosso construtor está ok, podemos prosseguir com a adição de funcionalidades.


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

~~Nightwatch~~, Protractor

Para o Protractor funcionar precisamos do WebDriverJS, que então controla o servidor Selenium (//TODO verificar melhor qual é a conexão das coisas). Para isso

```sh
$ # download do selenium, se necessario
$ ./node_modules/protractor/webdriver-manager update

$ # inicia o servidor
$ ./node_modules/protractor/webdriver-manager start
```

[Thought Works - Page Objects](http://www.thoughtworks.com/pt/insights/blog/using-page-objects-overcome-protractors-shortcomings)

[M.F - Page Object](http://martinfowler.com/bliki/PageObject.html)


## Finalizando

### Conclusão

### Call to Action

- como desde o começo tento introduzir uma prática nova, tenho que fazer uma chamada para um ação --> começar a testar com node.

> Assume that your presentation has delivered the information needed by the audience to move them in a direction and make your call to action definitive and instructional.


## Blá BLá

### Karma - testando em browsers de verdade

Há muitos problemas entre browsers diferentes e, como esperado, o problema de testes é exatamente capturar os erros. Precisamos então de um ambiente que facilite o teste em diferentes browsers de maneira rápida, de modo que possamos aproveitar os features de testes rápidos como descrito acima.


### Testes de vários tipos

Testes tomam vários 'levels'. Desde um muito focado (os testes unitários) até testes que testam exatamente a interação do usuário (end2end tests).
