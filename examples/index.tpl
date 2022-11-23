<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <link rel="stylesheet" href="//at.alicdn.com/t/font_137970_p1tpzmomxp9cnmi.css">
    <link rel='icon' href="https://www.fosunhealth.com/favicon.ico" color="#409EFF">
    <title>Fosun - 以人为本，以仁为本</title>
    <meta name="description" content="FS，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库" />
  </head>
  <style>

  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: #fff;
  }

  .hljs,
  .hljs-subst {
    color: #000;
  }

  .hljs-string,
  .hljs-meta,
  .hljs-symbol,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-addition {
    color: #756bb1;
  }

  .hljs-comment,
  .hljs-quote {
    color: #636363;
  }

  .hljs-number,
  .hljs-regexp,
  .hljs-literal,
  .hljs-bullet,
  .hljs-link {
    color: #31a354;
  }

  .hljs-deletion,
  .hljs-variable {
    color: #88f;
  }



  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-title,
  .hljs-section,
  .hljs-built_in,
  .hljs-doctag,
  .hljs-type,
  .hljs-tag,
  .hljs-name,
  .hljs-selector-id,
  .hljs-selector-class,
  .hljs-strong {
    color: #3182bd;
  }

  .hljs-emphasis {
    font-style: italic;
  }

  .hljs-attribute {
    color: #e6550d;
  }
  </style>
  <body>
    <script>
      if (!window.Promise) {
        document.write('<script src="//cdn.jsdelivr.net/npm/es6-promise@4.1.1/dist/es6-promise.min.js"><\/script><script>ES6Promise.polyfill()<\/script>')
      }
    </script>
    <div id="app"></div>
    <% if (process.env.NODE_ENV === 'production') { %>
      <script src="//shadow.elemecdn.com/npm/vue@2.5.21/dist/vue.runtime.min.js"></script>
      <script src="//shadow.elemecdn.com/npm/vue-router@3.0.1/dist/vue-router.min.js"></script>
      <script src="//shadow.elemecdn.com/app/element/highlight.pack.b1f71b31-3c07-11e9-ba1a-55bba1877129.js"></script>
    <% } %>
  </body>
  <% if (process.env.NODE_ENV === 'production') { %><script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
    (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
    m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-84335471-1', 'auto');
    ga('send', 'pageview');

    window.addEventListener('hashchange', function () {
      ga('set', 'page', window.location.href);
      ga('send', 'pageview');
    });
  </script><% } %>
  <% if (process.env.NODE_ENV !== 'production') { %><script>
    var ga = function() {
      console.log(arguments)
    };
  </script><% } %>
</html>
