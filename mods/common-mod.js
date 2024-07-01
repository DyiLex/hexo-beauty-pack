const BaseMod = require('./base-mod');
const { version } = require('../package.json');

module.exports = class CommonMod extends BaseMod {
    #mod = []
    #injectLib = {}

    initConfig() {
        this.config.loadConfig({
            cdn: {
                axios: 'https://cdn.jsdelivr.net/npm/axios@1.7.2/dist/axios.min.js',
                dayjs: 'https://cdn.jsdelivr.net/npm/dayjs@1.11.11/dayjs.min.js',
            }
        }, 'hexo-beauty-pack')
    }

    registerMod(mod) {
        if (!mod instanceof BaseMod) return

        this.#mod.push(mod)
        this.#collectInjectLibNames(mod)
    }

    modify() {
        this.#injectLogger()
        this.#injectLibs()
        this.#mod.forEach(mod => mod.modify())
    }

    #collectInjectLibNames(mod) {
        let meta = mod.meta() || {}
        let libNames = meta.needLibNames || []

        libNames.forEach(libName => {
            if (this.#injectLib[libName]) {
                this.#injectLib[libName] += 1
            } else {
                this.#injectLib[libName] = 1
            }
        })
    }

    #injectLibs() {
        Object.keys(this.#injectLib).forEach(libName => {
            let cdn = this.config.getValue('cdn.' + libName)

            if (!cdn) return

            this.injector.injectJs(cdn)
        })
    }

    #injectLogger() {
        this.injector.inject2HeadEnd(`
                <script>
                    !(function() {
                        let prefix = '[hexo-beauty-pack v${version}]';
                        let logger = {
                            debug: function(msg) {
                                console.log(prefix, msg);
                            },
                            info: function(msg) {
                                console.info(prefix, msg);
                            },
                            warn: function(msg) {
                                console.warn(prefix, msg);
                            },
                            error: function(msg) {
                                console.error(prefix, msg);
                            }
                        }
                        window._hbp_logger = logger;
                    })()
                </script>
            `)
    }
}
