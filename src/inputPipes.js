
function inputPipes (pipes, task) {
  function ifIsInputPipe (pipe) {
    return pipe.to.id === task.id 
  }

  return pipes.filter(ifIsInputPipe)
}

module.exports = inputPipes
