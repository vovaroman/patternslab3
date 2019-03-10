const express = require('express')
const path = require('path');
const router = express.Router();
const app = express()
const port = 3000


router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/Views/Index.html'));
});

router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/Views/About.html'));
  });
  
  router.get('/patterns',function(req,res){
    res.sendFile(path.join(__dirname+'/Views/Patterns.html'));
  });


app.use(express.static(__dirname + '/Views'));
app.use(express.static(__dirname + '/Script'));

app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');