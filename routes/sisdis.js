var express = require('express');
var router = express.Router();
var axios = require('axios')



router.get('/material', function(req, res, next) {

    axios.get('http://localhost:4000/sistemas-distribuidos').then((r) => {
  
      res.render('disciplinas/materials/sisdis', { data: r.data, curse: "Análise e Desenvolvimento de Sistemas", materia: "Sistemas Distribuídos", teacher: "Henning Summer" });
    })
});


module.exports = router;