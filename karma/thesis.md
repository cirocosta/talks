# Testing for the great web!

Javascript é uma linguagem de alto nível, excelente para scripiting (assim como diz em seu próprio nome), o que também nos torna muito produtivos, podendo criar várias coisas rapidamente, especialmente no ínicio de um projeto. Sua natureza extremamente dinâmica, entretando, faz com que enfrentemos grandes problemas ao construir grandes projetos. Isto ocorre ainda mais na Web, onde Recorrentemente percebemos várias diferenças entre implementações por parte dos navegadores - ainda mais quando isto se relaciona ao DOM. Mesmo fora do contexto puramente web, javascript não tem 'tools' nativas que diminuiriam erros, tais como static typings, erros de compilação e acesso indevido.

Várias sao as formas para tentarmos melhorar o ecosistema de desenvolvimento web:
-	Padrões (W3C, TC39)
-	bibliotecas (jQuery, DOJO, YUI)
-	Frameworks (Angular, Ember ...)
-	Transpillers
- TESTES!

Mas, porquê testes de fato melhoram o desenvolvimento?

1. prova-se que o código está correto (ou errado)
2. evita-se regressões
	2.1 Regression Bug - voltar a implementar um bug que já havia sido tratado no passado e então volta a ocorrer. Uma vez que temos testes automatizados rodando durante o desenvolvimento corremos muito menos este risco pois (3):
3. Feedback rápido: com testes automatizados temos o poder dos feedbacks imediatos. Ao introduzir uma mudança na base de código consegue-se rodar no mesmo instante o teste que comprova que tal adição não 'estraga' o resto.
4. refatoramento seguro - dado que em um momento uma função tem seus testes passando, para o mesmo input e output nela e mantendo os testes, o que refatorarmos internamente deve fazer os testes continuarem passando. Com tais premissas conseguimos rapidamente remover código que não altera resposta (supondo que o teste cubra bem os casos).
5. testes geram documentação - um teste bem escrito conta uma história. Uma história sobre o uso do código. Melhor ainda que documentação, a documentação por testes sempre está atualizada.
6. Melhores decisões de design - testar não trata-se unicamente de escrever testes, mas principalmente de produzir código testável. Isto leva a código 'loosely coupled' com dependencies explícitas. Mais do que isso, a prática do TDD leva a melhor 'Separation of Concerns' - diferentes partes do projeto terão diferentes custos, tais como networking, levando a diferentes Tipos de testes (o desenvolvedor precisa então conseguir tornar isto isolável). Somando isto tudo, um código testável segue melhor o Príncipio da responsabilidade Única.
7. É [magia!](https://www.youtube.com/watch?v=uHoB0KzQGRg#t=2086)!

## Ok, e o node?

Com NodeJS conseguimos ter uma grande facilidade na configuração do ambiente. Para que se tenha imbutido em uma equipe a prática do TDD é extremamente necessário que todos se sintam confortáveis com o ambiente, isto é, que seja fácil de instalar onde ele já está acostumado.

Além disso, é importante que seja fácil de instalar em qualquer lugar. Buildar projetos grandes e testar em uma grande gama de devices geralmente toma tempo e consome muitos recursos. (//TODO pegar estatísticas do keynote do GTAC 2013 sobre o Google) O aumento na gama de diferentes ambientes para se testar e buildar levou então ao uso de CI para isso. É necessário então que a configuração do mesmo seja fácil, de modo que encorage-se o uso de testes. //TODO formular melhor.

### Karma - testando em browsers de verdade

Há muitos problemas entre browsers diferentes e, como esperado, o problema de testes é exatamente capturar os erros. Precisamos então de um ambiente que facilite o teste em diferentes browsers de maneira rápida, de modo que possamos aproveitar os features de testes rápidos como descrito acima.



### Testes de vários tipos

Testes tomam vários 'levels'. Desde um muito focado (os testes unitários) até testes que testam exatamente a interação do usuário (end2end tests).

