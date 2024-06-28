module.exports = class BaseHelper {
    #helper
    
    constructor(hexo) {
        this._hexo = hexo
        this.#helper = hexo.extend.helper
    }

    register(name, fn) {
        this.#helper.register(name, fn)
    }

    getHelper(name) {
        return this.#helper.get(name).bind(this._hexo)
    }
}
