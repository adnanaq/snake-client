const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Receving message from server if idling for too long.
  conn.on('connect', () => {
    console.log('Successfully Connected'); // logging message upon connection
    // conn.write('Name: DNI'); // writing message to server.

    // conn.write('Move: up')
    // setTimeout(() => {
    //   conn.write('Move: up'); // sending move signal to server.
    // }, 3000);
  })
  conn.on('data', data => {
    console.log(data);
  });
  return conn;
}

module.exports = connect;