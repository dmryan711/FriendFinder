const express = require("../../node_modules/express");
const router = express.Router();
const path = require('path');
var friendsList = require('../data/friends');
const fs = require('fs');

    router.get('/', function(req, res){
        //res.json({ message: 'API Friends Page!' }); 
        fs.readFile(path.resolve('app','data/friends.js'),function(err,data){
            if(err){
               console.log(err);
            }else{
                res.json(JSON.parse(data));
            }
        });    
    });

    router.post('/',function(req,res){
      var newEntry = req.body;


        var diff = 50; //higher than the highest amount of differences
        var potentialMatch = {
            name:"No One",
            photo:"",
            difference:50
        }

        
      

        for(var i=0;i<friendsList.length;i++){ //get 1 friend
            console.log(friendsList[i].name);
            console.log(friendsList[i]);
            var total = 0;
            for(var j=0;j < friendsList[i].scores.length;j++){ //go through that friends scores
                total += Math.abs(friendsList[i].scores[j] - newEntry.scores[j]); //add abs diff
            }

            console.log("Total "+total);
            console.log("Diff "+diff);


            if(total < diff){
            
                diff = total;
                potentialMatch.name = friendsList[i].name;
                potentialMatch.photo = friendsList[i].photo;
                potentialMatch.difference = diff;
                console.log(potentialMatch.name);
                console.log(potentialMatch.difference);
            }
        }

        friendsList.push(newEntry);
        res.json(potentialMatch);
    });


module.exports = router;