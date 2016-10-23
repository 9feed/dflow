var path = require('path')

/**
 * Filter if path is *.json
 *
 *
 * ['foo', 'bar.json'].filter(dotJson) // ['bar.json']
 */

function dotJson (path) {
  return /\w+\.json/.test(path)
}

exports.dotJson = dotJson

/**
 * Append current working dir, if path is relative.
 *
 * ['graph1.json', 'graph2.json'].map(appendCwd)
 */

function appendCwd (givenPath) {
  return path.isAbsolute(givenPath) ? givenPath : path.join(process.cwd(), givenPath)
}

exports.appendCwd = appendCwd
