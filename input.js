let connection;

// binding keys 
const obj = {
  '\u0077': 'Move: up',
  '\u0073': 'Move: down',
  '\u0061': 'Move: left',
  '\u0064': 'Move: right'
}

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  stdin.resume();

  stdin.on('data', key => {
    handleUserInput(key);
    connection.write(obj[key]) // moving the snake based on the given key.
    connection.write('Say: Helo')
  });
  return stdin
}

// function to handle termination
const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit()
  };
}



module.exports = setupInput;