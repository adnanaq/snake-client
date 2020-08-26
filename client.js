const net = require('net');
const { IP, PORT } = require('./constants')
/**
 * Establishes connection with the game server
 */
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  // Receving message from server if idling for too long.
  conn.on('connect', () => {
    console.log('Successfully Connected'); // 
  })

  conn.on('data', data => {
    console.log(data);
  });
  return conn;
}

module.exports = connect;