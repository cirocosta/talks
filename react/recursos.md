# ReactJS no Mundo Real

## Disclaimer

20 anos, estudando, não trabalho,

mas tenho alguma ideia :P

## não estou vendo react :p




### Curva de Aprendizado

### Adotando o React em um projeto

> React doesn't take over the whole page, you don't need a new build system, and you don't have to throw out your existing code. You can drop a React component inside your existing application as long as you have a DOM node to contain it. And you can use other libraries (like jQuery plugins) from within React. (de [React: Convencendo o Chefe](http://www.quora.com/Pete-Hunt/Posts/React-Convincing-the-Boss); ver: [reddit shipa o primeiro código com React](http://facebook.github.io/react/blog/2014/09/12/community-round-up-22.html)). (...) we're the only one that takes composition seriously by making it the defining design decision of React.


#### Total compatibilidade na criação de componentes

React não liga para como será a criação de componentes. Prova disso se dá pelos esforços em compatibilidade com ES6 Classes, por exemplo, extinguindo o `React.createClass`.


### Isomorfismo

- [Isomorphic JS: The Future of WebApps](http://nerds.airbnb.com/isomorphic-javascript-future-web-apps/)

ok, isomorfismo é legal mas nem todo mundo pode servir conteúdo diretamente de NodeJS. E Django ... Rails? Como já mexi um pouco com Python cito um exemplo em Django, que pode então talvez ser aplicado a Rails

#### But wait, e quem não tem servidor NodeJS?

- [Taming Complexity with Django and React.js](http://lanyrd.com/2014/djangocon/sczrzw/)
- [How Instagram.com Works](http://www.youtube.com/watch?v=VkTCL6Nqm6Y)
- [Server-rendered React components in Rails](http://bensmithett.com/server-rendered-react-components-in-rails/)
- [Why we use React.js in our Rails projects](http://blog.arkency.com/2014/07/why-we-use-react-js-in-our-rails-projects/)
- [React on Rails Starter Kit](https://github.com/elierotenberg/react-rails-starterkit)
- [React Rails](https://github.com/reactjs/react-rails)
- [React on Rails](https://github.com/elierotenberg/react-rails)
- [React.js, The Rails Way](https://www.gitbook.io/book/checkraiser/rails-and-react-js)

ps.: Adaptar para Django


### Scaling

#### Flux

### Cases

- [Atom moving to React](http://blog.atom.io/2014/07/02/moving-atom-to-react.html)

### Ok, mas, no final do dia, por quê React?

- Compatibilidade
  - IE8 ready - isto importa para o Facebook
    - see [Working with the Browser](http://facebook.github.io/react/docs/working-with-the-browser.html#browser-support-and-polyfills) e ["Sebastian Markbage: Minimal API Surface Area - JSConf EU 2014"](http://www.youtube.com/watch?v=4anAwXYqLG8)
  - Consistência
- Performance
  - Batch OPS e
- Simplicidade
