'use strict'

const Hapi = require('hapi')
const routes = require('./src/routes')
const Path = require('path')

const server = Hapi.server({
  port: process.env.PORT || 4000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public')
    }
  }
})

server.route(routes)

const init = async () => {
  await server.register(require('vision'))
  await server.register(require('inert'))

  server.views({
    engines: {
      html: require('nunjucks-hapi')
    },
    path: 'views'
  })

  server.route({
    method: 'GET',
    path: '/{filename}',
    handler: {
      file: function (request) {
        return request.params.filename;
      }
    }
  })

  await server.start()
  console.log(`Server running at: ${server.info.uri}`)
}

process.on('unhandledRejection', (err) => {
  console.log(err)
  process.exit(1)
})

init()