var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'loft-album'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/loft'
  },

  test: {
    root: rootPath,
    app: {
      name: 'loft-album'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/loft'
  },

  production: {
    root: rootPath,
    app: {
      name: 'loft-album'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/loft'
  }
};

module.exports = config[env];
