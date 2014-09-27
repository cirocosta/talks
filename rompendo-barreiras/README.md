# Desenvolvimento Web Rompendo Barreiras

- apresentação, ciro, zitelli

- html5 provém funcionalidades baixo nível para os browsers porém somos limitados pelo browser com relação a o que podemos fazer, seja quanto a acesso ao sistema quanto ao acesso à interface toda (a janela inteira da aplicação). Não podemos, p.ex, programaticamente esconder a barra de endereços. Outro problema é que, apesar de o html5 prover várias funcionalidades interessantes, nem sempre nossos usuários usarão browsers que as suportem.

- Nodewebkit: chromium com capacidades extendidas para controlar os elementos de interface, tendo sua política de segurança relaxada (assume que toda a aplicação rodando alí é confiável). É interessante notar que o Chromium possui um modo de controlar o v8 diferente de como o NodeJS faz. Tal diferença se dá em grande parte quanto ao loop principal de cada um deles, que troca mensagens de maneira diferente (Chromium usa MessageLoop e MessagePump enquanto NodeJS usa libuv). É feita então uma implementação que traz o que o chromium faz para o libuv para que então o nodejs possa rodar. Tal modificação é necessária pois tal uso do MainLoop é uma dependencia do sistema de renderização. A grande vantagem é que temos então o poder do NodeJS, somado às APIs do HTML5 para criarmos interfaces com todo o conhecimento acumulado que temos de interfaces na web, no desktop, podendo criar aplicações para as Windows, Mac e Linux.

- Offline web

  - um start para offline first

  - nodewebkit para desenvolvimento entre plataformas --> reaproveitamento de código ==> ideia:  demonstração na web para os clientes de parte da funcionalidade que eles teriam com a versão completa offline;

  - altamente revolucionário trazer todo o esforço acumulado para resolver problemas de ui na web para desktop;

  - smartphones como coletor de dados do mundo real

- React

  - React como um excelente modelo de visualização de processos baseados em 'render' (jogos, loop iteração);

  - alta eficiência e encorajamento de flow unidirecional, de grande facilidade de se lidar trabalhando em ambientes reativos (eventos, etc)

  - FRP --> uma nova tendência?

- Hardware
  - Iot como um futuro próximo, que já está aí;

  - arduino como facilitador no processo de acesso à programação para hardware, possibilitando prototipação rápida.

  - Automatize all the things! Instalações iterativas

