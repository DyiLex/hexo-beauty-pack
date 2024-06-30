const log = require('hexo-log').default({
  debug: false,
  silent: false
})

new (require('./mods/common-helper'))(hexo).doRegister()
new (require('./mods/common-mod'))(hexo).modify()
new (require('./mods/simple-digital-clock'))(hexo).modify()

log.info('hexo-beauty-pack has done this!')
