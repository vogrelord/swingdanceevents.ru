var express = require('express');
var router = express.Router();
var calendar = require('../calendars')['default'];
var calendars = require('../calendars');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {route:'default', title: 'Express', calendar: calendar, calendars: calendars });
});

module.exports = router;
