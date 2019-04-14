module.exports = function(app){

    app.get('/api/friends', function(req, res){
        res.json({ message: 'API Friends Page!' });     
    });

    //other routes..
}