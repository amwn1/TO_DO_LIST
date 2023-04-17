const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items =["Buy food " , " eat","some some example"];
app.set('view engine', 'ejs'); // always place it below const app.
app.use(bodyParser.urlencoded({extended: true}));
app.get("/", (req, res) => {
    
    let today = new Date();

    let options = {
      weekday :"long",
      day:"numeric",
      month:"long"
    };
   
    let day = today.toLocaleDateString("en-US",options)
  
    res.render("list", { kindofDay: day ,newListItems: items});

})

app.post("/",(req,res) => {
   let item = req.body.newItem;
    items.push(item);
    res.redirect("/");

})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})
