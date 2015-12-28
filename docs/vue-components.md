# Dashboard & Vue

## 顶层事件
为了实现某些效果，需要通过在顶层广播一些事件给子组件，以使子组件能够完成效果。例如，通过全局点击触发的`dismiss`事件广播，`date-input`组件收到事件后，将会隐藏其`date-picker`子组件。

### `dismiss`
在全局点击事件发生时触发

## 组件

### 选项卡
```vue
<tab v-bind:active="2">
  <tab-item menu="Home">
    <p>content 1</p>
  </tab-item>
  <tab-item menu="Button">
    <p>content 2</p>
    <p>content 2</p>
  </tab-item>
</tab>
```

选项卡组件**必须**与子组件`<tab-item>`结合使用

#### props

+ `active` 当前选中的选项的索引（使用非负整数）
+ `color` 选项卡的颜色（使用主题颜色关键词：`primary`|`secondary`|`dark`|`danger`|`warning`|`tips`|`info`|`success`）

#### slot
内容只能是子组件

### 选项卡子组件

#### props

+ `menu` 该选项卡对应的菜单名称

#### slot

该选项卡对应的内容
