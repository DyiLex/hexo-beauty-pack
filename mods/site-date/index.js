const { parseDocument, DomUtils } = require('htmlparser2')
const { render } = require('dom-serializer')
const path = require('path')
const BaseMod = require('../base-mod')
const CommonHelper = require('../common-helper')
const BaseFilter = require('../base-filter')
const BaseInjector = require('../base-injector')

module.exports = class SiteDate extends BaseMod {
    #config = {
        enable: true,
        mount_dom_id: 'site-info',
        color: '#eee',
        priority: undefined,
        date_fns_url: 'https://cdn.jsdelivr.net/npm/date-fns@3.6.0/cdn.min.js'
    }

    constructor(hexo) {
        super(hexo)

        this.#initConfig()
    }

    modify() {
        if (!this.#config.enable) {
            return
        }

        this.#patch()
    }

    #initConfig() {
        const { config } = this._hexo
        this.#config = Object.assign(this.#config, config.sitedate)
    }

    #patch() {
        this.filter.register(BaseFilter.FILTER_TYPE.AFTER_RENDER_HTML, (html, data) => {
            if (!data.page.__index) {
                return
            }

            return this.#patchHtml(html)
        }, this.#config.priority)
        this.injector.register(BaseInjector.INJECTOR_ENTRY.HEAD_END, () => {
            const js = this.helper.getHelper('js')
            return js(this.#config.date_fns_url)
        }, BaseInjector.INJECTOR_TO.HOME)
    }

    #patchHtml(html) {
        let layout = this.renderer.render.renderSync({ path: path.join(__dirname, 'layout.pug') }, {
            config: this._hexo.config
        })
        let doc = parseDocument(html)
        let siteInfoDom = DomUtils.getElementById(this.#config.mount_dom_id, doc.children)

        DomUtils.appendChild(siteInfoDom, parseDocument(layout))

        return render(doc)
    }
}
