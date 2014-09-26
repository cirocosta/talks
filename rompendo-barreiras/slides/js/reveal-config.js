Reveal.initialize({
  controls: true,
  progress: false,
  history: true,
  center: true,
  transition: 'linear',
  dependencies: [
    { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } }
  ]
});
