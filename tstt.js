var express = require('express');
const ejs = require('ejs');
var tools = require('./app');
const path = require('path');
const PORT = process.env.PORT || 5050
// Initialise Express
var app = express();
// Render static files
app.use(express.static(path.join(__dirname, 'static')));
// Port website will run o
app.set('view engine', 'ejs');
app.listen(8080,function(){
    console.log('Server start: http://localhost:8080/')
});
app.get('/', function (req, res) {
    res.render('static/index');
});

app.post('/lll',(req,res)=>{
    res.sendFile(`${__dirname}/app.js`);
    console.log(req)
})

app.get('/login', (req, res) => {
    // you'll get your user's data in req.query
    console.log(req.query)

    console.log(req.query['id']);
    tools.lol(req.query['id']);
  });

app.get('/about', function (req, res) {
    res.send('about');
  });
  
  
