# hexo-beauty-pack

个人向自用Hexo插件，目的是添加一些小功能或美化而不改动主题代码。

## 安装
``` bash
$ npm install hexo-beauty-pack --save
```

## 使用

### 简单数字时钟
简单的数字文本时钟，显示当前月/日/时间/周几

#### 插件配置

_config.yml添加以下配置项

``` yaml
simple_digital_clock:
    enable: true                # 是否启用组件
    color: "#eee"               # 时钟文本颜色
    priority: 10                # 插件优先级
    dayjs_cdn:                  # dayjs的cdn链接
    mount_dom_id: "site-info"   # 组件挂载dom-id
    time_format_24_hour: true   # 是否24小时制
```

## 功能列表

- [x] 简单数字时钟

## 开源软件许可协议
MIT