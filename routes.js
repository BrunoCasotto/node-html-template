'use strict'

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      return reply.view('pages/home', { message: 'Hello Blog' })
    }
  }
]
