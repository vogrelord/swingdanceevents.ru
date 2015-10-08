var express = require('express');
var router = express.Router();
var calendars = require('../calendars');


/* GET home page. */
router.get('/:calendar_id', function(req, res, next) {
  var calendar_id = req.params.calendar_id;
  var calendar = calendars[calendar_id] || calendars['default'];
  res.render('index', {route: calendar_id||'default',  title: 'Express' , calendar: calendar, calendars: calendars});
});

module.exports = router;
