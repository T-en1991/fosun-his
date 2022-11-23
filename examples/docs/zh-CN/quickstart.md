## 快速使用

本节将介绍如何在项目中使用 fosun-his。

### 引入方式： npm 

推荐使用 npm 的方式安装，它能更好地和 [webpack](https://webpack.js.org/) 打包工具配合使用。

```shell
npm i fosun-his --save
```

### 引入 fosun-his

你可以引入整个 fosun-his，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 fosun-his。

#### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import FosunHis from 'fosun-his';
import 'fosun-his/lib/theme-chalk/index.css';
import App from './App.vue';

Vue.use(FosunHis);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

以上代码便完成了 FosunHis 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入
以button组件为例，在 main.js 中写入以下内容：
```javascript
import Vue from 'vue';
import { Button } from 'fosun-his';
import App from './App.vue';

Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
});
```
按需引入之后还需要配合[babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component)，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后，将 .babelrc 修改为：

```json
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "fosun-his",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
```

完整组件列表和引入方式（完整组件列表以 [components.json](gitlab地址) 为准）

### 开始使用

至此，一个基于 Vue 和 FosunHis 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。
