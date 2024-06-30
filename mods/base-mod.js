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
    }

    modify() {}
}
