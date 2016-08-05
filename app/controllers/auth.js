var express = require('express'),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function (app) {
  app.use('/', router);
};
/*
router.get('/auth', function (req, res, next) {
  res.render('common/_login');
  res.end();
})*/

router.post('/auth', function (req, res, next) {
  var email = req.body.email,
    password = req.body.password;

  
  User.findOne( { email: email }, function (err, user) {
    if (err) return next(err);
    
    if (!(user && user.checkPassword(password))) {
      res.status(400);
      res.write('email или пароль неверен');
      res.end();
    } else {
      req.session.name = req.body.email;
      res.status(200);
      res.end();
    }
  })
});

router.get('/logout', function(req, res, next) {
  
  req.session.destroy();
  res.redirect('/auth');
  res.status(200);
})


  

