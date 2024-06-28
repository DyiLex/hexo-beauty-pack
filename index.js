'use strict'

const log = require('hexo-log').default({
  debug: true,
  silent: false
})

new (require('./mods/common-helper'))(hexo).doRegister()
new (require('./mods/common-mod'))(hexo).modify()
new (require('./mods/site-date/index'))(hexo).modify()
