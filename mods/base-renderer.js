module.exports = class BaseRenderer {
    #renderer

    constructor(hexo) {
        this._hexo = hexo
        this.render = hexo.render
        this.#renderer = hexo.extend.renderer
    }

    register(name, output, fn, sync) {
        this.#renderer.register(name, output, fn, sync)
    }
}