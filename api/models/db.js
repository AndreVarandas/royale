const mongoose = require('mongoose');
require('./deck');

const dbURI = 'mongodb://localhost/royale';
if (process.env.NODE_ENV === 'production')
  dbURI = process.env.MONGOLAB_URI;

/** Create new connection */
mongoose.connect(dbURI);

mongoose.connection.on('connected', () => {
  console.log(`Mongoose connected to ${dbURI}`)
});

mongoose.connection.on('error', () => {
  console.log(`Mongoose connection error ${dbURI}`)
});

mongoose.connection.on('disconnected', () => {
  console.log(`Mongoose disconnected to ${dbURI}`)
});

const gracefullShutdown = (msg, callback) => {
  mongoose.connection.close(() => {
    console.log('Mongoo disconnected through ' + msg);
    callback();
  })
};

// Nodemon restarts
process.once('SIGUSR2', () => {
  gracefullShutdown('nodemon restart', () => {
    process.kill(process.pid, 'SIGUSR2');
  });
});

// App Termination
process.once('SIGINT', () => {
  gracefullShutdown('app termination restart', () => {
    process.exit(0);
  });
});

// Heroku termination
process.once('SIGTERM', () => {
  gracefullShutdown('Heroku app shutdown', () => {
    process.exit(0);
  });
});