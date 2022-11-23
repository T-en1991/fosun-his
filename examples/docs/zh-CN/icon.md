## Icon 图标

提供了一套常用的图标集合。

### 使用方法

直接通过设置类名为 `fs-icon-iconName` 来使用即可。例如：

:::demo
```html
<i class="fs-icon-edit"></i>
<i class="fs-icon-share"></i>
<i class="fs-icon-delete"></i>
<fs-button type="primary" icon="fs-icon-search">搜索</fs-button>

```
:::

### 图标集合

<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'fs-icon-' + name"></i>
      <span class="icon-name">{{'fs-icon-' + name}}</span>
    </span>
  </li>
</ul>
