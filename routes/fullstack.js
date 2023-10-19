var express = require('express');
var router = express.Router();
var axios = require('axios')



router.get('/material', function(req, res, next) {

    axios.get('http://localhost:4000/fullstack-arquitetura').then((r) => {
  
      res.render('disciplinas/materials/fullstack', { data: r.data, curse: "Análise e Desenvolvimento de Sistemas", materia: "Fullstack e Arquitetura", teacher: "Henning Summer" });
    })
});


module.exports = router;