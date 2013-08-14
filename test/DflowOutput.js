var DflowGraph, DflowOutput, DflowTask, IperNode, dflow, emptyTask, graph, iper, task;

dflow = require('../index');

iper = require('iper');

DflowGraph = dflow.DflowGraph;

DflowOutput = dflow.DflowOutput;

DflowTask = dflow.DflowTask;

IperNode = iper.IperNode;

graph = new DflowGraph();

emptyTask = function() {};

task = new DflowTask(graph, emptyTask);

describe('DflowOutput', function() {
  describe('inheritance', function() {
    it('is an IperNode', function() {
      var output;
      output = new DflowOutput(task);
      return output.should.be.instanceOf(IperNode);
    });
    return it('checks that task is an IperNode', function() {
      return (function() {
        return new DflowOutput('not a task', data);
      }).should.throwError();
    });
  });
  return describe('constructor', function() {
    return it('has signature (task)', function() {});
  });
});