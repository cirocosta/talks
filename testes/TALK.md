# Testing for the great web!

### Introdução

Gostaria de dar um pouco de contexto do porquê que eu considero válido apresentar uma palestra sobre Testes automatizados em um meetup 'for dummies', como foi entitulado.

#### 1 - Ciro Costa

É .. primeiramente, eu sou o Ciro, Ciro Costa, essa é a minha segunda palestra, estou bastante nervoso por sinal ahahha, trabalhei um tempo no Apontador (site de busca de Locais, alguns devem conhecer) mexendo com Node, bastante javascript, agora tenho me dedicado praticamente apenas a projetos abertos e estudos da faculdade.

Há alguns meses eu e alguns colegas de faculdade a gente se envolveu com um projeto realmente animal:

#### 2 - Pipetadora, 3 - Pipetadora Video

construir uma Pipetadora Automática, com vários patamares e uma interface amigável, indo bastante ao contrário do que realmente existe (este é um dos protótipos que a gente fez).

Aí então chego ao que eu comecei dizendo sobre o contexto de querer fazer uma palestra sobre testes: Tenho me infiltrado muito então nesses projetos multidisciplinares, incluindo galera de Química, Mecânica e outras áreas bastante distantes de computação.


E aí vem o lance: a maioria já programou, ou programa, alguns outros conhecidos mesmo, já programaram bastante mas nunca se realmente interessaram em prover testes automatizados em seus projetos, mesmo em projetos bastante interessantes e de complexidade alta.

E isso me faz lembrar de mim mesmo, que quando comecei a mexer com web e entrei em contato com Django (que é, a grosso modo, o similar do Rails para Python) eu pensava que testar era algo pra profissionais e isso não era pra ser feito por mim. Me lembro que na época havia inclusive discussões quanto a colocar ou não já no tutorial introdutório a seção sobre testes, o que pra mim não fazia sentido algum.


Mas parece que as coisas vem mudando bastante. Para a pipetadora eu decidi usar AngularJS para me forçar a entrar nesse mundo de Frameworks e entender direito como as coisas andam. E foi muito interessante porquê o Angular por si só já tem em seus princípios a testabilidade, sendo então desde o princípio mostrado como se testam as coisas nele.

#### 4 - Mas Porque?

Falei de teste ... teste. .. talvez quem nunca testou pode agora estar bastante confuso, pensando que talvez isso seja algo bom, talvez difícil, não sei.


Mas, porquê eu comecei a me interessar por isso? Talvez você, que nunca testou, possa então se identificar e começar a testar.

Há um tempo atrás eu tentei ter uma startup, a gente conseguiu alguns clientes e tal, o projeto já estava ficando bastante grande e díficil de manter,

#### 5 - Memes Bug

resolvia um bug e criava outros dois sem saber (quem nunca?), o que cria uma situação de muita raiva e pouca produtividade.

#### 6 Javascript ... Liberdade .. Problemas

Esses problemas de bugs que aparecem do nada são ainda mais facilitados em linguagens bastante dinâmicas como Javascript.


Javascript é uma linguagem de alto nível, excelente para scripiting (assim como diz em seu próprio nome), o que também nos torna muito produtivos, podendo criar várias coisas rapidamente, o que é notável especialmente no ínicio de um projeto. Já que a linguagem tem essa natureza extremamente dinâmica, isso, faz com que a gente enfrente grandes problemas ao construir projetos maiores. Isto ocorre ainda mais na Web, onde Recorrentemente percebemos várias diferenças entre implementações por parte dos navegadores - ainda mais quando isto se relaciona ao DOM. Mesmo fora do contexto puramente web, que é o caso dessa conferẽncia de hoje - explorar também o conetxto não-web - javascript não tem, por si só, várias das 'tools' nativas que diminuiriam erros, tais como static typings, erros de compilação e acesso indevido, entre vários outros problemas. O bom é que hoje em dia temos ferramentas para lidar com isso e boas práticas também.

#### 7 - Esforços

Várias sao as formas para tentarmos melhorar o ecosistema de desenvolvimento web:
-	Padrões (W3C, TC39)
-	bibliotecas (jQuery, DOJO, YUI - tiiinha)
-	Frameworks (Angular, Ember ...)
-	Transpillers
- TESTES!

Mas, bom, ok, dei um contexto de como eu comecei, tentando situar um pouco do problema. Mas porquê testes de fato melhoram o desenvolvimento? No que vou ficar melhor do que se não testar?

#### 8-  O que são testes?

Ah sim, Antes de um porquê, o que é um teste?

Eu procurei no wikipedia, já que era algo que eu particularmente não acho fácil definir, é uma daquelas coisas que você sabe o que é mais não é fácil dizer claramente ...

> Compara o estado e comportamento do produto contra Oráculos

Achei então bastante interessante ... oráculo ... fiquei pensando e faz todo o sentido porquê trata-se de 'alguma coisa', separada da 'treta principal --> código' que tem um conjunto de respostas para tudo (para todo e qualquer método ele tem uma resposta correta daquilo, ele sabe o que é esperado) ele contém a resposta final e divina --> em um projeto se seu teste não passar, é muito bom que tenha uma explicação convincente ou seu pull request provavelmente não terá chance de ser aceito.


#### 9-  Porquê testar?

* Feedback rápido:
	* com testes automatizados temos o poder dos feedbacks imediatos. Se você introduziu um problema, rapidamente vai consertar e não vai propagar isso por todo o código (erros tendem a ser cumulativos quando não detectados rapidamente). Ao introduzir uma mudança na base de código consegue-se rodar no mesmo instante o teste que comprova que tal adição não 'estraga' o resto. Quanto mais confiança você consiga ter, mais pode ousar no código.

		* refatoramento seguro - dado que em um momento uma função tem seus testes passando, para o mesmo input e output nela e mantendo os testes, o que refatorarmos internamente deve fazer os testes continuarem passando. Com tais premissas conseguimos rapidamente remover código que não altera resposta (supondo que o teste cubra bem os casos). Em projetos abertos isso conta muito para a atração de novos colaboradores já que os mesmos podem ter certeza que não estão estragando o código do projeto (ninguém quer levar culpa).

* Menor Incerteza - prova-se que o código está "correto"

	* Assim como, na mão, depois de codarmos nós vamos à sua execução ver se ele está funcionando como deveria, com os testes automatizados nós temos isso (inclusive com nomeclatura muito parecida em BDD). TDD Realmente trata-se apenas de tornar esse processo automatizado.

	* ps: correto está entre aspas pois corretude pode variar em várias formas. Por exemplo um código pode gerar o output esperado mas não ser eficiente, o que levaria, em muitos casos, mostrar que isto o mesmo não está correto. É interessante notar que esse comportamento incorreto seria também detectável!


* Melhores decisões de design -

	* testar não trata-se unicamente de escrever testes, mas principalmente de produzir código testável. Isto leva a código 'loosely coupled' com dependencies explícitas. Mais do que isso, a prática do TDD leva a melhor 'Separation of Concerns' - diferentes partes do projeto terão diferentes custos, tais como networking, levando a diferentes Tipos de testes (o desenvolvedor precisa então conseguir tornar isto isolável). Somando isto tudo, um código testável segue melhor o Príncipio da responsabilidade Única. (Singleton sucks!)


* evita-se regressões
	* Regression Bug - voltar a implementar um bug que já havia sido tratado no passado e então volta a ocorrer. Uma vez que temos testes automatizados rodando durante o desenvolvimento corremos muito menos este risco pois (3):


* testes geram documentação
	* um teste bem escrito conta uma história. Uma história sobre o uso do código. Melhor ainda que documentação, a documentação por testes sempre está atualizada.

#### 10 - Magia

6. É [magia!](https://www.youtube.com/watch?v=uHoB0KzQGRg#t=2086)!


Apesar de estar passando um video de testes em Android, o legal é que com NodeJS, diferente do Android, conseguimos ter uma grande facilidade na configuração do ambiente e o modo de se obter os resultados dos testes.

Para que se tenha imbutido em uma equipe a prática do TDD é **extremamente** necessário que todos se sintam confortáveis com o ambiente, isto é, que seja fácil de instalar onde ele já está acostumado e sejam mínimos os passos para se ter algo funcional. Trata-se realmente de uma cultara de testes. Não deixar só na mão de uma setor mas sim fazer com que todo mundo produza código testável e com testes.

Mais do que só testar localmente, com o NodeJS é muito fácil fazer com que os testes também rodem em servidores dedicados só pra isso, como Travis e outros.

#### 11 - Cool Stuff!

Como geralmente talks sobre testes costumam ser cansativos e pouco divertidos, imaginei que seria divertido colocar alguma ação, então para mim não há nada mais interessante do que realmente mostrar código! O primeiro tutorial que eu vi sobre testes era sobre como criar uma Calculadora, que é o que todo mundo sabe como se faz uma e é bem intuitivo.

#### 12 - Mocha e Chai

Para os testes em Node irei ilustrar primeiramente o Mocha, um framework de teste bastente conhecido e também simples. Foi mantido por muito tempo pelo TJ Holowaychuck, criador do que deve ser o mais famoso framework e acredito que maioria deve conhecer, o Express, cujos testes, naturalmente, são rodados pelo Mocha.

Há vários outros bastante conhecidos, tal como o Jasmine (quem curte Angular deve conhecer, JEST do Facebook - agora utilizado bastante com React) mas ainda assim sendo o Mocha o mais simples (em minha opiniao) para se trabalhar.

A outra biblioteca fundamental que vou estar utilizando se trata do [Chai](http://chaijs.com/) que é uma biblioteca de asserção, isto é, vai nos dar os métodos que irão testar se nossas expectativas batem com o que é de fato obtido através de um método (irá criar nossos Oráculos). Estou utilizando essa em si por que ela nos dá grande verbosidade, fica muito próximo da linguagem natural a forma com que as asserções são feitas.

Começando então com o código :smile:

#### 12/1 - Passo 0

Há várias maneiras de se introduzir os testes no workflow de um grupo, alguns testam antes de fazer o código em si, outros depois ... eu gosto de iniciar pelos testes para ir pensando desde o início em uma interface simples e testável.


O Mocha, assim como outros frameworks de testes trabalha com encapsulamento por meio dos `Describes`, cuja finalidade é deixar claro qual o escopo daquela do conjunto de testes que se está cobrindo, trata-se da Suite. O `it` então trata-se do teste em si, uma especificação (a chamada Spec) onde deve haver uma asserção (afirmação --- a palavra de fato existe). Vale lembrar que por se tratarem de funções quaisquer, qualquer código executável de javascript pode ser declarado alí.

Vamos então ver se o teste passa:

... FAIL

É claro que não iria passar, nosso objeto Calc não está definido! Podemos ver no reporter então quais foram as especificações que falharam e no escopo de qual objeto isso ocorreu. Dessa forma a gente consegue detectar rapidamente onde esta a falha.

Vamos então ver no código da calculadora o que pode ter ocorrido:

... Tudo comentado, objeto `{}` sendo exportado do `calculadora.js`.


Como tinha falado sobre o feedback rápido, algo legal que o mocha já tem embutido é um Watcher, que analisa os arquivos importantes ao teste e então, toda vez que ocorrer alguma modificação neles, roda os testes novamente nos mostrando então se tal alteração no arquivo fez o teste passar ou não.

Tendo o teste passado, i.e, mostrando que nosso construtor está ok, podemos prosseguir com a adição de funcionalidades.


#### 12/2 Passo 1 - Métodos na Calculadora

Uma calculadora sem função alguma não serve para nada. Vamos então adicinar o método soma. Mais uma vez criei então um contexto, desta vez para o soma. Não se trata de algo necessário mais isso aumenta a organização dos testes, o que é algo importante à medida que se tem vários e identificar facilmente qual teste falhou trata-se de algo importante. Para o soma então poderíamos ter vários testes: se quando passamos somente um argumento ele levante uma exception, se passsando strings ele realmente parseia pra INT e aplica a soma, entre vários outros. Aqui testo apenas o mais intuitivo.


### Passo 2 - Método Assíncrono

O Mocha possui uma interface bastante favorável a testes com funções assíncronas. Há basicamente dois modos de testar este tipo de função:

1. passar a função de callback, aguardar o resultado e fazer um assert
2. fazer um 'stub', isto é, um código que simula comportamento da função e então expõe como a mesma foi chamada. // acho que não é hora de falar disso. Deixa para a parte do jQuery

Para a primeira basta utilizar o `done`, função passada como callback do `it`que deve ser então chamado para sinalizar que a chamada terminou.


Para a segunda podemos utilizar uma biblioteca feita para isso: SinonJS. O SinonJS busca introduzir três conceitos à testes: spying, stubbing, mocking.


### Passo 3 - Joga os testes e a lib para o Browser


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

