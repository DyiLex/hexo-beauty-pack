const cheerio = require('cheerio')
const BaseConfig = require('./base-config')
const BaseFilter = require('./base-filter')
const BaseHelper = require('./base-helper')
const BaseInjector = require('./base-injector')
const BaseRenderer = require('./base-renderer')

module.exports = class BaseMod {
    constructor(hexo) {
        this._hexo = hexo
        this.config = new BaseConfig(hexo)
        this.filter = new BaseFilter(hexo)
        this.injector = new BaseInjector(hexo)
        this.helper = new BaseHelper(hexo)
        this.renderer = new BaseRenderer(hexo)

        this.initConfig()
    }

    initConfig() {}

    meta() {
        return {
            needLibNames: []
        }
    }

    modify() {}

    patchHTML(patcher, priority) {
        this.filter.registerAfterRenderHtml(patcher, typeof priority === 'number' ? priority : this.config.getValue('priority'))
    }

    patchLayout2Dom(html, selector, layoutPath) {
        let $ = cheerio.load(html)
        let mountDom = $(selector)

        if (mountDom.length === 0) {
            return html
        }

        let layout = this.renderer.renderSync({ path: layoutPath }, {
            config: this.config.getConfig()
        })

        mountDom.append(layout)
        
        return $.html()
    }

    
}
