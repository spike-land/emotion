'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./emotion-jest-serializer.cjs.prod.js')
} else {
  module.exports = require('./emotion-jest-serializer.cjs.dev.js')
}
