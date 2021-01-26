import http from 'http';

import app from '../app';

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (Number.isNaN(port)) {
    return val;
  }

  if (port >= 0) {
    return port;
  }

  return false;
}

/*
Get port from environment and store in Express
*/
const port = normalizePort(process.env.PORT || '5000');
app.set('port', port);

const server = http.createServer(app);
server.listen(port);

/*
Event listener for HTTP server "error" event
*/
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? `Pipe ${port}`
    : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${'\x1b[31m'}[server] ${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${'\x1b[31m'}[server] ${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
});

/*
Event listener for HTTP server "unhandledRejection" event
*/
server.on('unhandledRejection', (reason) => {
  console.error(`${'\x1b[31m'}[server] Unhandled rejection. ${reason}`);
});

/*
Event listener for HTTP server "uncaughtException" event
*/
server.on('uncaughtException', (err) => {
  console.error(`${'\x1b[31m'}[server] Uncaught exception. ${err.message}`);
  process.exit(1);
});

/*
Event listener for HTTP server "listening" event
*/
server.on('listening', () => {
  const addr = server.address();
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`;
  console.log(`${'\x1b[36m'}[server] Listening on ${bind}`);
});
