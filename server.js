const express = require('./node_modules/express');
const app =  express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());

const PORT = process.env.PORT || 8080;


const router = express.Router();

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
// router.get('/', function(req, res) {
//     res.json({ message: 'hooray! welcome to our api!' });   
// });

// more routes for our API will happen here



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);



require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// START THE SERVER
// =============================================================================
app.listen(PORT, function(){
    console.log("Listening on port "+PORT);
});
