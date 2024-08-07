const path = require('path')
const BaseMod = require('../base-mod')

module.exports = class SiteDate extends BaseMod {
    initConfig() {
        this.config.loadConfig({
            enable: true,
            color: '#eee',
            priority: 10,
            mount_dom_selector: '',
            time_format_24_hour: true
        }, 'simple_digital_clock')
    }

    meta() {
        const meta = super.meta()
        meta.needLibNames.push('dayjs')

        return meta
    }

    modify() {
        if (!this.config.getValue('enable')) return
        
        this.patchHTML(this.#htmlPacher.bind(this))
    }

    #htmlPacher(html) {
        let mountDomSelector = this.config.getValue('mount_dom_selector')
        let layoutPath = path.join(__dirname, 'layout.pug')
        
        return this.patchLayout2Dom(html, mountDomSelector, layoutPath)
    }
}
