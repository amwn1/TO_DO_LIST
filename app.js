const express = require("express");
const bodyParser = require("body-parser");
const app = express();
let items =["Buy food " , " eat","some some example"];
let workItems = [];
app.set('view engine', 'ejs'); // always place it below const app.
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
    
    let today = new Date();

    let options = {
      weekday :"long",
      day:"numeric",
      month:"long"
    };
   
    let day = today.toLocaleDateString("en-US",options)
  
    res.render("list", { listTitle: day ,newListItems: items});

})

app.post("/",(req,res) => {
    console.log(req.body);
   let item = req.body.newItem;
    items.push(item);
    res.redirect("/");
  
})

app.get("/work",(req,res) => {
    res.render("list",{listTitle: "Work List" , newListItems: workItems});
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.post("/work",(req,res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.listen(3000, () => {
    console.log("Server is running at port 3000");
})


