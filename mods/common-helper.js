const BaseHelper = require('./base-helper')
const util = require('./util')

module.exports = class CommonHelper extends BaseHelper {
    static helperNames = {}

    #render
    
    constructor(hexo) {
        super(hexo)
        
        this.#render = hexo.render
    }

    doRegister() {}
}
