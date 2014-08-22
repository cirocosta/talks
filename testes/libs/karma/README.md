# Karma

## Features

-	testar o código em browsers DE VERDADE (incluindo phones/tablets) e também browser headless (PhantomJS).

-	Agnóstico em relação ao framework a utilizar - depende de um adapter específico, apenas

-	Integrável com [jenkins](http://karma-runner.github.io/0.12/plus/jenkins.html)/[travis](http://karma-runner.github.io/0.12/plus/travis.html)


## Install

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
