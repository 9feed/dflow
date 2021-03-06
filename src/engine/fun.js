var builtinFunctions = require('./functions/builtin')
var evalTasks = require('./evalTasks')
var isDflowDSL = require('./isDflowDSL')
var injectAdditionalFunctions = require('./inject/additionalFunctions')
var injectArguments = require('./inject/arguments')
var injectAccessors = require('./inject/accessors')
var injectDotOperators = require('./inject/dotOperators')
var injectGlobals = require('./inject/globals')
var injectNumbers = require('./inject/numbers')
var injectReferences = require('./inject/references')
var injectStrings = require('./inject/strings')
var inputArgs = require('./inputArgs')
var isDflowFun = require('./isDflowFun')
var level = require('./level')
var no = require('not-defined')
var regexComment = require('./regex/comment')
var regexSubgraph = require('./regex/subgraph')
var reservedKeys = require('./reservedKeys')
var validate = require('./validate')
var walkGlobal = require('./walkGlobal')

/**
 * Create a dflow function.
 *
 * @param {Object} graph to be executed
 * @param {Object} [additionalFunctions] is a collection of functions
 *
 * @returns {Function} dflowFun that executes the given graph.
 */

function fun (graph, additionalFunctions) {
  // First of all, check if graph is valid.
  try {
    validate(graph, additionalFunctions)
  } catch (err) {
    throw err
  }

  var func = graph.func || {}
  var pipe = graph.pipe
  var task = graph.task

  var cachedLevelOf = {}
  var computeLevelOf = level.bind(null, pipe, cachedLevelOf)
  var funcs = builtinFunctions

  // Inject compile-time builtin tasks.

  funcs['dflow.fun'] = fun
  funcs['dflow.isDflowFun'] = isDflowFun
  funcs['dflow.validate'] = validate

  injectAccessors(funcs, graph)
  injectAdditionalFunctions(funcs, additionalFunctions)
  injectDotOperators(funcs, task)
  injectGlobals(funcs, task)
  injectReferences(funcs, task)
  injectStrings(funcs, task)
  injectNumbers(funcs, task)
  evalTasks(funcs, task)

  /**
   * Compiles a sub graph.
   */

  function compileSubgraph (key) {
    var subGraph = graph.func[key]

    var funcName = '/' + key

    funcs[funcName] = fun(subGraph, additionalFunctions)
  }

  /**
   * Sorts tasks by their level.
   */

  function byLevel (a, b) {
    if (no(cachedLevelOf[a])) cachedLevelOf[a] = computeLevelOf(a)

    if (no(cachedLevelOf[b])) cachedLevelOf[b] = computeLevelOf(b)

    return cachedLevelOf[a] - cachedLevelOf[b]
  }

  /**
   * Ignores comments.
   */

  function comments (key) {
    return !regexComment.test(task[key])
  }

  // Compile each subgraph.
  Object.keys(func)
    .forEach(compileSubgraph)

  /**
   * Throw if a task is not compiled.
   */

  function checkTaskIsCompiled (taskKey) {
    var taskName = task[taskKey]

    // Ignore tasks injected at run time.
    if (reservedKeys.indexOf(taskName) > -1) return

    var msg = 'Task not compiled: ' + taskName + ' [' + taskKey + ']'

    // Check subgraphs.
    if (regexSubgraph.test(taskName)) {
      var subgraphKey = taskName.substring(1)

      if (no(graph.func[subgraphKey])) {
        var subgraphNotFound = new Error(msg)
        subgraphNotFound.taskKey = taskKey
        subgraphNotFound.taskName = taskName
        throw subgraphNotFound
      } else return
    }

    // Skip dflow DSL.
    if (isDflowDSL(taskName)) return

    // Skip globals.
    if (walkGlobal(taskName)) return

    if (no(funcs[taskName])) {
      var subgraphNotCompiled = new Error(msg)
      subgraphNotCompiled.taskKey = taskKey
      subgraphNotCompiled.taskName = taskName
      throw subgraphNotCompiled
    }
  }

  // Check if there is some missing task.
  Object.keys(task)
    .filter(comments)
    .forEach(checkTaskIsCompiled)

  /**
   * Here we are, this is the ❤ of dflow.
   */

  function dflowFun () {
    var gotReturn = false
    var returnValue
    var outs = {}

    // Inject run-time builtin tasks.

    funcs['this'] = function () { return dflowFun }
    funcs['this.graph'] = function () { return graph }
    injectArguments(funcs, task, arguments)

    /**
     * Execute task.
     */

    function run (taskKey) {
      var args = inputArgs(outs, pipe, taskKey)
      var taskName = task[taskKey]
      var f = funcs[taskName]

      // Behave like a JavaScript function:
      // if found a return, skip all other tasks.

      if (gotReturn) return

      if ((taskName === 'return') && (!gotReturn)) {
        returnValue = args[0]
        gotReturn = true
        return
      }

      // If task is not defined at run time, throw an error.

      if (no(f)) {
        var taskNotFound = new Error('Task not found: ' + taskName + ' [' + taskKey + '] ')
        taskNotFound.taskKey = taskKey
        taskNotFound.taskName = taskName
      }

      // Try to execute task.

      try {
        outs[taskKey] = f.apply(null, args)
      } catch (err) {
        // Enrich error with useful dflow task info.
        err.taskName = taskName
        err.taskKey = taskKey

        throw err
      }
    }

    // Run every graph task, sorted by level.

    Object.keys(task)
      .filter(comments)
      .sort(byLevel)
      .forEach(run)

    return returnValue
  }

  // Remember function was created from a dflow graph.

  dflowFun.graph = graph

  return dflowFun
}

module.exports = fun
