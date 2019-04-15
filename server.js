const   express = require("./node_modules/express"),
        htmlRoutes = require("./app/routing/htmlRoutes"),
        apiRoutes = require("./app/routing/apiRoutes");
const app =  express();
const path = require("path");



app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/',htmlRoutes);
app.use('/api/friends',apiRoutes);


const PORT = process.env.PORT || 8080;





// START THE SERVER
// =============================================================================
app.listen(PORT, function(){
    console.log("Listening on port "+PORT);
});
