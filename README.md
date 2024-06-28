## 简介
个人向Hexo插件，目的是添加一些小功能或美化而不改动主题代码。

## 安装
``` bash
$ npm install hexo-beauty-pack --save
```

## 功能
### 简单时钟组件
简单的文本时钟，显示当前月/日/时间/周几
#### 插件配置
``` yaml
# 添加到Hexo配置文件_config.yml
# 插件配置项
sitedate:
    enable: true                # 是否启用。默认：true
    mount_dom_id: "site-info"   # 组件挂载元素ID。默认：site-info
    color: "#eee"               # 时钟颜色。默认："#eee"
    date_fns_url:               # date-fns.js链接。默认jsdelivr
    priority: 10                # 插件优先级。默认：10
```
### 更多功能开发中
- [] 还没想好做啥

## 开源软件许可协议
MIT