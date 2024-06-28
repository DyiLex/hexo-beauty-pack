module.exports = class BaseFilter {
    static FILTER_TYPE = {
        BEFORE_POST_RENDER: 'before_post_render',
        AFTER_POST_RENDER: 'after_post_render',
        BEFORE_EXIT: 'before_exit',
        BEFORE_GENERATE: 'before_generate',
        AFTER_GENERATE: 'after_generate',
        TEMPLATE_LOCALS: 'template_locals',
        AFTER_INIT: 'after_init',
        NEW_POST_PATH: 'new_post_path',
        POST_PERMALINK: 'post_permalink',
        AFTER_RENDER_HTML: 'after_render:html',
        AFTER_RENDER_PUG: 'after_render:pug',
        SERVER_MIDDLEWARE: 'server_middleware'
    }

    #filter

    constructor(hexo) {
        this._hexo = hexo
        this.#filter = hexo.extend.filter
    }

    register(type, fn, priority) {
        this.#filter.register(type, fn, priority)
    }

    execSync(type, data, options) {
        return this.#filter.execSync(type, data, options)
    }
}
