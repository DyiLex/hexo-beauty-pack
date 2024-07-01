# hexo-beauty-pack

个人向自用Hexo插件，目的是添加一些小功能或美化而不改动主题代码。

## 安装
``` bash
$ npm install hexo-beauty-pack --save
```

## 使用

### 基础配置

_config.yml添加以下配置项

``` yaml
hexo_beauty_pack:
    # 依赖库的CDN配置
    cdn: {
        axios: '',
        dayjs: ''
    }
```

### 简单数字时钟
简单的数字文本时钟，显示当前月/日/时间/周几

#### 插件配置

_config.yml添加以下配置项

``` yaml
simple_digital_clock:
    enable: true                # 是否启用组件
    color: "#eee"               # 时钟文本颜色
    priority: 10                # 插件优先级
    mount_dom_selector: ""      # 组件挂载dom选择器
    time_format_24_hour: true   # 是否24小时制
```

### IP定位问候语

根据访客IP地址自动定位访客所在地，并显示问候语。

#### 插件配置

_config.yml添加以下配置项

``` yaml
ip_location_greeting:
    enable: true,                               # 是否启用组件
    color: '',                                  # 高亮文本色
    priority: 10,                               # 插件优先级
    amap_api_key: '',                           # 高德地图API Key
    welcome_message: '欢迎欢迎，热烈欢迎！',        # 末尾的问候语
    mount_dom_selector: '',                     # 组件挂载dom选择器
    live_lat_lng: [ 39.906217, 116.3912757 ]    # 间距地点经纬度，纬度在前，经度在后
```

## 功能列表

- [x] 基础配置
- [x] 简单数字时钟
- [x] IP定位问候语

## 开源软件许可协议
MIT
