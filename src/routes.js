'use strict'
const FileHelper = require('./helpers/file')

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const pathToStyle = FileHelper.getStylePath('home.css')
      const styleFile = FileHelper.readFile(pathToStyle)

      return reply.view('pages/home', { style: styleFile })
    }
  },
  {
    method: 'GET',
    path: '/dogs',
    handler: (request, reply) => {
      const dogList ={
        items:  [
          {breed: 'labrador', img:'/dog.jpg'},
          {breed: 'labrador', img:'/dog.jpg'},
          {breed: 'labrador', img:'/dog.jpg'}
        ]
      }

      return dogList
    }
  }
]
