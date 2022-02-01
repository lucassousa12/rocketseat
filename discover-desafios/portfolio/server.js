const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/asset', express.static(__dirname + 'public/assets'));


app.get("/", function(req, res){
    res.render("pages/index", {
        styleFile: 'index'
    });
})
app.get("/profile", function(req, res){
    res.render("pages/profile", {
        styleFile: 'profile'
    });
})

app.listen(8080);
console.log("Servidor funcionando...")