const express = require("../../node_modules/express");
const router = express.Router();
const path = require('path');
const fs = require('fs');

    router.get('/', function(req, res){
        //res.json({ message: 'API Friends Page!' }); 
        fs.readFile(path.resolve('app','data/friends.js'),function(err,data){
            if(err){
               console.log(err);
            }else{
                console.log(data);
                res.json(JSON.parse(data));
            }
        });    
    });

    router.post('/',function(req,res){
        console.log(req.body.name);
        res.json({message:'Here you are'});
    });


module.exports = router;