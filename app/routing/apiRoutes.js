module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json({ message: 'API Friends Page!' });     
    });

    app.post('/api/friends',function(req,res){
        console.log(req.body.name);
        res.json({message:'Here you are'});
    });

}