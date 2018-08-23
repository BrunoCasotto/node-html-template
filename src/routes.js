'use strict'
const Path = require('path')
const fs = require('fs')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      // const pathToFile = Path.join(__dirname, 'resources', 'styles', 'home.css')
      // let styleContent = fs.readFileSync(pathToFile, 'utf8');
      // let styleContent = ''
      return reply.view('pages/home', { style: '' })
    }
  }
]
