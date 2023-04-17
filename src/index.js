const express = require('express');
const app = express();
const path = require('path');

const ejs=require('ejs');
const templatePath=path.join(__dirname,'../templates')

const port = process.env.PORT||3000;

//app.use(express.json());
// Static Files
//app.use(express.static('public'));

// Example for other olders
// app.use('/css', express.static(__dirname + 'public/css'))
//app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine','ejs');

app.set("views",templatePath);


/*app.use(
    "/css",
    express.static(path.join(_dirname, "node_modules/bootstrap/dist/css"))
  )
  app.use(
    "/js",
    express.static(path.join(_dirname, "node_modules/bootstrap/dist/js"))
  )
  app.use("/js", express.static(path.join(_dirname, "node_modules/jquery/dist")))
  







//home route

/*app.get('/',(req,res)=>{
    res.render('login',{ title:"Login System"});
})*/


app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/signup',(req,res)=>{
    res.render('signup')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
 app.listen(port,()=>{console.log("Listening to the server on http://localhost:3000")});