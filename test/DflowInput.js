var DflowGraph, DflowInput, DflowTask, IperNode, dflow, emptyTask, graph, iper, task;

dflow = require('../index');

iper = require('iper');

DflowGraph = dflow.DflowGraph;

DflowInput = dflow.DflowInput;

DflowTask = dflow.DflowTask;

IperNode = iper.IperNode;

graph = new DflowGraph();

emptyTask = function() {};

task = new DflowTask(graph, emptyTask);

describe('DflowInput', function() {
  describe('inheritance', function() {
    return it('is an IperNode', function() {
      var input;
      input = new DflowInput(task);
      return input.should.be.instanceOf(IperNode);
    });
  });
  return describe('constructor', function() {
    return it('has signature (task, data, meta)', function() {});
  });
});