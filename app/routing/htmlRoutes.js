module.exports = function(app){

    
    app.get('/',function(req,res){
        res.json({message:'Home Page!'});
    });
    app.get('/survey', function(req, res){
        res.json({ message: 'Survey Page!' });    
    });

}

