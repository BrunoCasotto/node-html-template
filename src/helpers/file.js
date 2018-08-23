'use strict'
const fs = require('fs')
const Path = require('path')

class FileHelper {

  /**
   * function to get the file content
   * @param {string} path to file
   */
  readFile(path) {
    return fs.readFileSync(path, 'utf8')
  }

  /**
   * function to build a path to especific style
   * @param {string} fileName name of style file
   */
  getStylePath(fileName) {
    return Path.join(__dirname, '..', '..', 'resources', 'styles', fileName)
  }
}

module.exports = new FileHelper()
