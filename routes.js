'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return reply.view('index', { message: 'Hello Blog' })
    }
  }
]
