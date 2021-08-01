const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const date =require(__dirname +"/date.js");
//   app.request(bodyParser)
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs');
                                           
app.use(express.static("public"));

var items=["buy food",'cook food','eat food'];
                                 
app.get("/", function (req, res) {
          let newday = date.getday();
            res.render("list",{kindofdays:newday,alwayseats:items});
            
            });

            app.post("/",function(req,res){
                var item = req.body.newitem;
                items.push(item)
                res.redirect("/")                
              })

        app.listen(port, function () {
            console.log("server start at 3000");
        })

        app.get("/about",function(req,res){
          res.render("about")
        })