
var examples   = require('../src/examples'),
    fun        = require('../src/fun'),
    isDflowFun = require('../src/isDflowFun'),
    should     = require('should')

describe('isDflowFun', function () {
  describe('returns false if it', function () {
    it('is a function but has not a graph property', function () {
      function f () { /* not generated by dflow */ }

      f.funcs = {}

      isDflowFun(f).should.be.ko
    })

    it('is a function but has not a funcs property', function () {
      function f () { /* not generated by dflow */ }

      f.graph = {}

      isDflowFun(f).should.be.ko
    })

    it('is a function but graph property is not an object', function () {
      function f () { /* not generated by dflow */ }

      f.funcs = {}
      f.graph = 'not an object'

      isDflowFun(f).should.be.ko
    })
  })

  it('returns false if it is a function but funcs property is not an object', function () {
    function f () { /* not generated by dflow */ }

    f.funcs = 'not an object'
    f.graph = {}

    isDflowFun(f).should.be.ko
  })

  describe('returns true if it', function () {
    it('is a function generated by dflow', function () {
      for (var exampleName in examples) {
        var exampleGraph = examples[exampleName]

        var f = fun(exampleGraph)

        isDflowFun(f).should.be.ko
      }
    })
  })
})

