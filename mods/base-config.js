const { getProperty } = require('./util')

module.exports = class  BaseConfig {
    #config

    constructor(hexo) {
        this._hexo = hexo
        this.#config = hexo.config
    }

    #patchConfig(defaultCfg, rootProp) {
        let targetConf = this.#config
        
        if (rootProp) {
            targetConf = this.#config[rootProp]
        }

        return Object.assign(defaultCfg, targetConf)
    }

    loadConfig(defaultCfg, rootProp) {
        this.#config = this.#patchConfig(defaultCfg, rootProp)
    }

    getConfig() {
        return this.#config
    }

    getValue(props) {
        return getProperty(this.#config, props)
    }
}
