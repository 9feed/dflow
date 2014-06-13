
var algorithm    = require('./algorithm')
  , Graph        = require('./Graph')
  , Registry     = require('./Registry')
  , corePlugin   = require('./plugin/core')
  , windowPlugin = require('./plugin/window')

for (var i in algorithm)
  exports[i] = algorithm[i]

exports.Graph = Graph

exports.Registry = Registry

exports.plugin = {}

/**
 * Import plugin
 *
 * A dflow plugin is a function that accepts `dflow` as parameter.
 *
 * A simple plugin, in file myplugin.js
 *
 * ```js
 * module.exports = function myplugin (dflow) {
 *   dflow.register('foo', function bar () { return 'quz' })
 * }
 * ```
 *
 * If the exported function is named, for instance *myplugin*, dflow will store
 * it in the `dflow.plugin` object.
 *
 * Make it easy!
 *
 * * If plugin *foo* is stored in a file, name it *foo.js*.
 * * If plugin *foo* is stored in a package, name it *foo* and add a *dflow-plugin* keyword.
 *
 * How to import it
 *
 * ```js
 * var dflow = require('dflow')
 *   , myplugin = require('./myplugin')
 *
 * dflow.use(myplugin)
 * ```
 *
 * @param {Function} plugin to be imported
 *
 * @return {Object} dflow
 */

function use (plugin) {
  plugin(exports)

  // Export plugin as a dflow.plugin item
  if (plugin.name.length > 0)
    exports.plugin[plugin.name] = plugin

  return exports
}

exports.use = use

// Load core plugin at compile time
use(corePlugin)

// Load window plugin if it seems there is a window
if (typeof global.window === 'object') {
  use(windowPlugin)
}
