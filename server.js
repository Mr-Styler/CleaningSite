var express     = require("express")
var app         = express()
var bodyParser  = require("body-parser");
// var mongoose    = require("mongoose")
var errorController = require("./controllers/error");
// const driversRoute = require('./routes/drivers')
// const authRoute = require('./routes/auth')
// const shopRoute = require('./routes/shop')
// const adminRoute = require('./routes/admin')

// mongoose.connect("mongodb://localhost/Cleanu").then(()=> console.log("DB connection successfull")).catch((err)=>{console.log(err)});
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs')
app.use(express.static(__dirname + "/public"))

// app.use("/admin", adminRoute)
// app.use("/driver", driversRoute)
// app.use(authRoute)
// app.use(shopRoute)

// ROUTES
app.get("/", (req, res)=>{
    res.render('home/index')        
})
app.get("/v2", (req, res)=>{
    res.render('home/index2')        
})
app.get("/v3", (req, res)=>{
    res.render('home/index3')        
})
app.get("/v4", (req, res)=>{
    res.render('home/index4')        
})
app.get("/about-us", (req, res)=>{
    res.render('about')        
})
app.get("/contact-us", (req, res)=>{
    res.render('contact')       
})

app.use(errorController.getErrorPage)

app.listen(5000, ()=>{
    console.log("cleaning site online...")
})
    