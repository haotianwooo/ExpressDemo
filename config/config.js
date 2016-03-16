var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'expresstest'
    },
    port: 3000,
    db: 'mongodb://localhost/expresstest-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'expresstest'
    },
    port: 3000,
    db: 'mongodb://localhost/expresstest-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'expresstest'
    },
    port: 3000,
    db: 'mongodb://localhost/expresstest-production'
  }
};

module.exports = config[env];
