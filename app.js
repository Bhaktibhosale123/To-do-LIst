const express = require("express");
const app = express();

app.set('view engine', 'ejs');

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

const date = require(__dirname+"/date.js");

var new_items = [ ];
var workListItems = [];

app.get("/",function(req,res){
  var currentDay = date.getDate();
  res.render("index",{day : currentDay ,  newListItems : new_items});
  /*res.sendFile(__dirname+"/list.html");*/
});

app.get("/work",function(req,res){
  res.render("index",{day : "Work List" ,  newListItems : workListItems});
})

app.post("/",function(req,res){
  var new_item = req.body.newItem;
  console.log(req.body);
  if (req.body.list === "Work" ){
    workListItems.push(new_item);
    res.redirect("/work");
  }else{
    new_items.push(new_item);
    res.redirect("/");
  }
})

app.listen(process.env.PORT||5000,function(){
});
