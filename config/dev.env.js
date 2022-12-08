'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // BASE_API: '"//api.platform.local"',
  // BASE_API: '"//api2.9wangame.local"',
  // BASE_API: '"//api.matangame.com"',
  NAME: '"九玩"',
})

