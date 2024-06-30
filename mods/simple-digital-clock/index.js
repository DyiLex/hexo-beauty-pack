const { parseDocument, DomUtils } = require('htmlparser2')
const { render } = require('dom-serializer')
const path = require('path')
const BaseMod = require('../base-mod')

module.exports = class SiteDate extends BaseMod {

    constructor(hexo) {
        super(hexo)

        this.#initConfig()
    }

    #initConfig() {
        this.config.loadConfig({
            enable: true,
            color: "#eee",
            priority: 10,
            dayjs_cdn: "https://cdn.jsdelivr.net/npm/dayjs@1.11.11/dayjs.min.js",
            mount_dom_id: "site-info",
            time_format_24_hour: true
        }, 'simple_digital_clock')
    }

    modify() {
        this.config.getValue('enable') && this.#patch()
    }

    #patch() {
        this.injector.injectJs(this.config.getValue('dayjs_cdn'))

        this.filter.registerAfterRenderHtml(html => this.#patchHtml(html), this.config.getValue('priority'))
    }

    #patchHtml(html) {
        let doc = parseDocument(html)
        let mountDom = DomUtils.getElementById(this.config.getValue('mount_dom_id'), doc.children)

        if (!mountDom) {
            return html
        }

        let layout = this.renderer.renderSync({ path: path.join(__dirname, 'layout.pug') }, {
            config: this.config.getConfig()
        })

        DomUtils.appendChild(mountDom, parseDocument(layout))
        
        return render(doc)
    }
}
