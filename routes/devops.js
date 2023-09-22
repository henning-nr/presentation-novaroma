var express = require('express');
var router = express.Router();
var axios = require('axios')


router.get('/material', function(req, res, next) {

    axios.get('http://localhost:4000/devops-config').then((r) => {
  
      res.render('disciplinas/materials/devops', { data: r.data, curse: "Análise e Desenvolvimento de Sistemas", materia: "Devops e Configuração", teacher: "Henning Summer" });
    })
});



module.exports = router;