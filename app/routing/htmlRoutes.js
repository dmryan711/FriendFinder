const express = require("../../node_modules/express");
const router = express.Router();
const path = require('path');

  
    router.get('/',function(req,res){
        var fileName = path.resolve('app','public/home.html');
        //console.log(fileName);
        res.sendFile(fileName);
    });

    router.get('/survey', function(req, res){
        var fileName = path.resolve('app','public/survey.html');
        //console.log(fileName);
        res.sendFile(fileName);
          
    });

module.exports = router;


