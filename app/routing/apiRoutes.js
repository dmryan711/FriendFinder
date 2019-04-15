const express = require("../../node_modules/express");
const router = express.Router();
const path = require('path');

    router.get('/', function(req, res){
        res.json({ message: 'API Friends Page!' });     
    });

    router.post('/',function(req,res){
        console.log(req.body.name);
        res.json({message:'Here you are'});
    });


module.exports = router;