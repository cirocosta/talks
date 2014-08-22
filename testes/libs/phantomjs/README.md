# PhantomJS

> Browser headless (usando Webkit) com API de script em Javascript.

- **NÃO** se trata de um framework de tests.

- **NÃO** se trata de um módulo NodeJS (não se trata de binding para o código C++, mas sim um executável em 'self-contained') - mas existe um pacote chamado [phantomjs-node](https://github.com/sgentle/phantomjs-node) que provém uma api bem legal para tratá-lo como módulo!

- roda no Travis/Jenkins :)

> One major use case of PhantomJS is headless testing of web applications. It is suitable for general command-line based testing, within a precommit hook, and as part of a continuous integration system.

Empacota o WebKit todo --> buildar tomaria muito tempo, a melhor maneira é trabalhar com um binário pronto. Os ['features' suportados](https://github.com/ariya/phantomjs/wiki/Supported-Web-Standards) pela versão do webkit utilizada pelo Phantom pode ser obtida na página do [QtWebKit](http://trac.webkit.org/wiki/QtWebKitFeatures22). Em suma, não suporta: flash, webgl, video e audio, css-3d.

Assim como recomendado pelos próprios criadores, escrever scripts puros para PhantomJS não é tão 'legal'. Seu real poder vem quando combinado com algum framework de testes com interface para tal.

## Install

Bastante fácil, há um wrapper para sua instalação por npm. Basta: `npm install -g phantomjs`

##  Usos interessantes:

- Uso para renderizar cards no Trello
- Uso para testes de regressão (PhantomCSS)
- Uso para verificação de numero de requisições e outros de networking (integra-se com YSlow)
-	Renderização de SVG/Canvas/Geração de PDF (p.ex, gitprint, p.ex slippy -> convertendo apresentações HTML para Pdf)
