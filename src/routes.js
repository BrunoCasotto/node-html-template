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

const posts = [
  {
    title: 'perspiciatis...',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    title: 'perspiciatis unde omnis',
    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem  veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
  },
  {
    title: 'unde omnis iste',
    text: 'Sed ut perspiciatis unde omnis iste na atis unde omnis iste natus error sit voluptatem  veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
  }
]

const news = [
  {
    title: 'de Finibus Brspiciatis unde omnis is',
    alt: "news 3",
    src: "/news_1.png",
    href: "#news1",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
  },
  {
    title: 'de Malorum',
    alt: "news 3",
    src: "/news_3.jpg",
    href: "#news_3",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
  },
  {
    title: 'de perspiciatis unde omnis',
    alt: "news 3",
    src: "/news_1.png",
    href: "#news_3",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
  },
  {
    title: 'unde et Malorum',
    alt: "news 3",
    src: "/news_3.jpg",
    href: "#news_3",
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore'
  }
]

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
      const pathToStyle = FileHelper.getStylePath('home.css')
      const style = FileHelper.readFile(pathToStyle)

      return reply.view('pages/home', { style, banners, posts, news })
    }
  }
]
