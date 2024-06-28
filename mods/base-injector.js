module.exports = class BaseInjector {
    static INJECTOR_ENTRY = {
        HEAD_BEGIN: 'head_begin',
        HEAD_END: 'head_end',
        BODY_BEGIN: 'body_begin',
        BODY_END: 'body_end'
    }
    static INJECTOR_TO = {
        DEFAULT: 'default',
        HOME: 'home',
        POST: 'post',
        PAGE: 'page',
        ARCHIVE: 'archive',
        CATEGORY: 'category',
        TAG: 'tag'
    }
    
    #injector

    constructor(hexo) {
        this._hexo = hexo
        this.#injector = hexo.extend.injector
    }

    register(entry, value, to) {
        this.#injector.register(entry, value, to)
    }
}