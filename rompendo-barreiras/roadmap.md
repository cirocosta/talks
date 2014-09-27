# Desenvolvimento Web Rompendo Barreiras

## ~ ~ Web in the sky ~ ~

A web é um ambiente muito conhecido para desenvolvimento há um bom tempo. Foram desenvolvidos uma quantidade enorme de hacks para fazermos de tudo dentro desse sandbox que é o browser. Não que o browser seja uma limitação ruim, já que o mesmo traz a segurança e a praticidade para lidarmos com apps. Isso é tudo muito legal, rapidamente podemos espalhar nossa criação para o mundo todo que possui acesso à internet. Mas há uma tendência que já chegou forte: Internet of Things e automação residencial.

## IOT!!!

Nós que somos desenvolvedores web temos uma grande vantagem nessa onda: temos grande capacidade para prototipar rapidamente produtos e soluções, criando produtos belos e performáticos, afinal muitos de nós temos de fazer isto diariamente. Mas o que acontece é que ao tentarmos entrar nesse nicho de mercado que envolve hardware, nós, da web, esbarramos com um problema central ao desenvolvimento para hardware:

- Por segurança, páginas web não podem acessar diretamente o filesystem, assim como acessar, p.ex, portas seriais.

Ok, isto é de fato o esperado. Mas bem, somos uma comunidade de NodeJS que já superou isso e consegue fazer isso funcionar: temos aí o módulo nativo do Node, `fs`, por exemplo. Poderíamos criar um programa que rode em NodeJS e pronto, não?

Não pois não basta apenas criarmos algo que nós, desenvolvedores, possamos utilizar. Devemos atingir o grande público e tornar o uso de nossa tecnologia trivial de ser utilizada. Para isso devemos poder distribuíla de forma fácil: liberar um `.exe` para o usuário windows, um pacote mac e um executável linux. Além disso, precisamos de uma interface, de modo que o mesmo consiga orientar o funcionamento do programa ser ter que saber algo de programação.

## Node-webkit

Tudo isso passa a ser possível através do Node-webkit, que é uma das soluções de desenvolver aplicações desktop com tecnologias Web.
Ele por si só poderia ser o assunto de um talk, tal como já foi feito por outros pessoas, mas resumindo: Trata-se do Chromium com capacidades extendidas para controlar os elementos de interface, tendo sua política de segurança relaxada (assume que a aplicações rodando é confiável), junto ao NodeJS que nos dá todo o acesso ao filesystem e ao estilo de programar que já estamos acostumados, podendo até mesmo criar servidores.

Solucionamos então os problemas tratados anteriormente, já que conseguimos ter essa união entre o que precisávamos: acesso ao 'baixo nível' que o browser não nos permite, renderização como estamos acostumados e distribuição facilitada.

### Front!

Podemos então claramente trazer qualquer biblioteca de frontent que estamos acostumados para desenvolvermos a interface, que deve ser SPA (O node-webkit trata apenas de uma página `index.html` para toda sua interface).

#### ReactJS!

Como a gente queria fazer um talk sobre literalmente romper barreiras com o desenvolvimento web, achamos muito justo que utilizássemos tecnologias que de fato trouxessem uma nova cara para o desenvolvimento. Com ReactJS é isso que acontece.

Trata-se de uma biblioteca para lidar com interfaces de usuário, simplemente renderizando a interface e respondendo a eventos, combinando geração de DOM e lógica daquilo a mostrar. Seu princípio simples:

> Crie programas que executem ao longo do tempo, tratando tudo como funções indempotentes, i.e, funções que, dado um conjunto de inputs SEMPRE irá produzir a mesma saída.

Pensando desta maneira React incetiva a criação de apps previsíveis, criando separação de preocupações para renderização e manutenção de estados.

Para entender React podemos pensar em como era a programação há tempos atrás: lhe era servido uma página estática com os dados que o servidor tinha em um certo ponto no tempo. Se o usuário quisesse dados recentes, dava um refresh na página e então lhe era servida a nova representação. E se fizessemos isso no client-side?

### Render

Sempre que nossos dados mudam, React re-renderiza o componente. Ele verifica as propriedades dele e então atualiza, como base na função de renderização que passamos para ele.

```javascript
render: function () {
  return (
    <h1>NodeBR!!!</h1>
  );
};
```

Entendido isso, pode-se levantar então questões quanto à performance: destruir sempre o dom e recriá-lo com o novo componente é custo, não? SIM! E por isso o React tem um modo próprio de não fazer isso.

É implementado por trás uma representação, por meio de objetos, do DOM que faz uma correspondência quase direta com o tal. Para todo update é então calculada a diferença entre o último estado dessa representação com a nova e então apenas nas diferenças é atualizado, removido ou adicionado elementos ao dom, mantendo o resto da estrutura intacta.

## E o Hardware?

Tudo isso é show, muito legal, mas ainda assim não saímos da web. Falamos apenas de tecnologias web. Como realmente entraríamos em contato com um hardware?

### serialport

Existe há um certo tempo um projeto chamado node-serialport, que atualmente é o estado da arte da comunicação com a serial por meio de NodeJS. Ele tratará de resolver a conexão com o hardware, enviando dados para que o mesmo possa realizar seus cálculos e de fato fazer algo.


### Arduino

O Arduíno vem como facilitrador no processo de acesso à programação de hardware, incentivando a prototipação rápida: trata-se de um componente simples, barato e seguro. Com ele muitos projetos legais já foram feitos (//TODO citar projetos legais), além de possuir uma ampla comunidade ao seu entorno, dado que seu hardware é complemente construído de maneira aberta, tal como seu software, incentivando desenvolvedores a aderiram a tal movimento.


## DEMO TIME!

Como a real intenção deste talk é incentivar o uso de tais tecnologias novas, buscamos então preparar uma demo que utiliza essas três tecnologias.

Nosso programa é uma aplicação desktop, criada com o node-webkit, que representará, por meio do ReactJS, e controlará - por meio do arduino e conexão por node - nossa matriz de leds, mostrando na mesma o estado que nossa aplicação encapsula.
