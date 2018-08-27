'use strict'
const FileHelper = require('./helpers/file')
const banners = [
  {
    alt: "news 1",
    src: "/news_1.png"
  },
  {
    alt: "news 2",
    src: "/news_3.jpg"
  },
  {
    alt: "news 3",
    src: "/news_1.png"
  },
  {
    alt: "news 4",
    src: "/news_3.jpg"
  }
]
module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const pathToStyle = FileHelper.getStylePath('home.css')
      const style = FileHelper.readFile(pathToStyle)

      return reply.view('pages/home', { style, banners })
    }
  }
]
