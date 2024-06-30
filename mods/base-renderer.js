module.exports = class BaseRenderer {
    #render
    #renderer
    

    constructor(hexo) {
        this._hexo = hexo
        this.#render = hexo.render
        this.#renderer = hexo.extend.renderer
    }

    register(name, output, fn, sync) {
        this.#renderer.register(name, output, fn, sync)
    }

    renderSync(data, options) {
        return this.#render.renderSync(data, options)
    }
}