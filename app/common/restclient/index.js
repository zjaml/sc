var rest = require('rest')
var errorCode = require('rest/interceptor/errorCode')
var mime = require('rest/interceptor/mime');
var pathPrefix = require('rest/interceptor/pathPrefix')
var jwt = require('./interceptor/jwt')

const client = rest.wrap(mime, { mime: 'application/json' })
  .wrap(errorCode)
  .wrap(pathPrefix, { prefix: 'http://localhost:8000' })
  .wrap(jwt)

module.exports = client