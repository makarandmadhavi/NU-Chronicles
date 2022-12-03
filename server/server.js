require('./api/models/user');
const express = require('express');
const app = express();
const port = 4000;

const bodyParser = require('body-parser');
const routes = require('./api/routes/routes');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bhavya:bhavya1234@cluster0.kde993z.mongodb.net/?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology:true
},(err)=>{
    if(!err){
        console.log('connected to db');
    }
    else{
        console.log(' not connected to db');
    }
    
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

mongoose.connection.on('connected', function(){
    console.log("connection success")
})

routes(app);


app.listen(port, () => {
  console.log(`Node.JS App Running at http://localhost:${port}`)
})