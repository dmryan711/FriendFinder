const path = require('path');

module.exports = function(app){
  
    app.get('/',function(req,res){
        var fileName = path.resolve('app','public/home.html');
        //console.log(fileName);
        res.sendFile(fileName);
    });


    app.get('/survey', function(req, res){
        var fileName = path.resolve('app','public/survey.html');
        //console.log(fileName);
        res.sendFile(fileName);
          
    });

}

