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

    inject2HeadEnd(str, injectTo) {
        this.register(BaseInjector.INJECTOR_ENTRY.HEAD_END, () => str, injectTo)
    }

    inject2BodyEnd(str, injectTo) {
        this.register(BaseInjector.INJECTOR_ENTRY.BODY_END, () => str, injectTo)
    }

    injectCss(href, injectTo) {
        let link = `<link rel="stylesheet" href="${href}">`
        this.inject2HeadEnd(link, injectTo)
    }

    injectJs(src, injectTo) {
        let js = `<script src="${src}"></script>`
        this.inject2HeadEnd(js, injectTo)
    }
}