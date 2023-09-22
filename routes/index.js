var express = require('express');
var router = express.Router();
var axios = require('axios')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.redirect('/disciplinas')
});

router.get('/disciplinas', function(req, res, next) {
    res.render('index')
});

router.get('/home', function(req, res, next) {
    res.render('home')
});

module.exports = router;
