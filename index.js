const express = require('express');
const PORT =  process.env.PORT || 3000;
const routes = require('./routes/routes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();
const path = require('path')
const profilesPublicAssets = path.join(__dirname, 'profiles', 'build', 'static')

//envirmonment
require('dotenv').config()
if(process.env.NODE_ENV === 'production') {

} else {
    
}

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use((req, res, next)=>{
    console.log("**************NEW *****************");
    // use res.render to load up an ejs view file
    console.log("middleware", req.url);
    console.log(__dirname + '/public');
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Authorization");
    //serve assets for frontend
    if(req.url === '/profiles') {
        console.log("yes prfiles");
        app.use(express.static(profilesPublicAssets));
    }else {
        app.use(express.static(__dirname + '/public'));
    }

    next();
})



app.use(routes);
app.use(apiRoutes);

//serve react app
app.get('/profiles', (req,res, next)=>{
    // res.sendFile(path.join(profilesPublicAssets, '..', 'index.html'))
    res.send("hey")
})

app.listen( PORT, ()=>{
 console.log("listening")
})