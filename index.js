const log = require('hexo-log').default({
  debug: false,
  silent: false
})
const { version } = require('./package.json')

const mod = new (require('./mods/common-mod'))(hexo)
mod.registerMod(new (require('./mods/simple-digital-clock'))(hexo))
mod.registerMod(new (require('./mods/ip-location-info'))(hexo))
mod.modify()

log.info(`[v${version}] Hexo-beauty-pack has done this!`)
