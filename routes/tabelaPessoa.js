var express = require('express');
var router = express.Router();

var UsersModel = require('../schema/user');
var Response = require('../response');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('tabelaPessoa', { title: 'Tabela de pessoas' });
});



module.exports = router;
