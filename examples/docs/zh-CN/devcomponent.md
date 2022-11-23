## 开发组件

本节面向FosunHis前端成员，将介绍如何在项目中使用 fosun-his开发组件。

### 如何新建组件
- 通过gitlab拉取项目至本地，并切本地开发分支
- 根目录，输入**npm run new 组件名**自动创建组件的相关文件及引用

```
## 例如:创建test组件(fs-test)
npm run new test
```

- 在packages下的test则是组件文件
- 在packages/theme-chalk/src/test则是组件样式文件
- 当组件写完以后，输入**npm run build:entry**，将组件被引入到入口文件
- 执行**npm run build:theme&&npm run build:com**，打包
- 打包后的文件为根目录下的lib文件


### 如何调试组件
- 在example/docs/zh-CN/下创建markdown，该文件用于调试，也用于日后官方文档的维护
- 在nav.config.json下按需填充该组件的json信息
- 执行npm run build进行调试


### 如何维护云搜索
- 1
- 2
- 3


### 如何发布
- 1
- 2
- 3

