const path = require('path')
const BaseMod = require('../base-mod');

module.exports = class IpLocationInfo extends BaseMod {
    initConfig() {
        this.config.loadConfig({
            enable: true,
            color: '',
            priority: 10,
            amap_api_key: '',
            welcome_message: '欢迎欢迎，热烈欢迎！',
            mount_dom_selector: '',
            live_lat_lng: [ 39.906217, 116.3912757 ]
        }, 'ip_location_info')
    }

    meta() {
        const meta = super.meta()
        meta.needLibNames.push('axios')

        return meta
    }

    modify() {
        if (!this.config.getValue('enable') || !this.config.getValue('amap_api_key')) return
        
        this.patchHTML(this.#htmlPacher.bind(this))
    }

    #htmlPacher(html) {
        let mountDomSelector = this.config.getValue('mount_dom_selector')
        let layoutPath = path.join(__dirname, 'layout.pug')
        
        return this.patchLayout2Dom(html, mountDomSelector, layoutPath)
    }
}
