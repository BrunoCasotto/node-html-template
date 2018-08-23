'use strict'

const Hapi = require('hapi')
const routes = require('./routes')
const Path = require('path')

const server = Hapi.server({
  port: process.env.PORT || 4000,
  host: 'localhost'
})

server.route(routes)

const init = async () => {
  await server.register(require('vision'))

  server.views({
    engines: {
      html: require('nunjucks-hapi')
    },
    path: 'views'
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()