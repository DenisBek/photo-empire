var express = require('express'),
  multiparty = require('multiparty'),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Album = mongoose.model('Album');

module.exports = function (app) {
  app.use('/', router);
};

router.get(['/main', '/'], function (req, res, next) {

  if (req.session.name) {
      
    User.findOne({email: req.session.name}, function (err, user) {
      if (err) return next(err);
      res.render('common/_main_page', {
        name: user.name,
        description: user.description || 'Заполните описание профиля, нажав на кнопку "Редактировать"',
        avatar: user.avatar || 'img/svg/cam.svg'
      });
      res.end();
    })
      
  } else {
    res.render('common/_login');
  }
});