var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/material', function(req, res, next) {

    axios.get('http://localhost:4000/cloud-computing').then((r) => {
  
      res.render('disciplinas/materials/cloud', { data: r.data, curse: "Análise e Desenvolvimento de Sistemas", materia: "Cloud Computing e Web Service", teacher: "Henning Summer" });
    })
});


module.exports = router;