const express = require("express");
const app = express();
const mongoose= require("mongoose");
const Listing= require("./models/listing.js");
const path = require("path");
const methodOverride= require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
    .then(()=>{
        console.log("connect to db");
    })
    .catch((err) =>{
        console.log(err);
    });
    async function main() {
        await mongoose.connect(MONGO_URL);
    }

    app.set("view engine","ejs");
    app.set("views",path.join(__dirname,"views"));
    app.use(express.urlencoded({extended:true}));
    app.use(methodOverride("_method"));
    app.engine('ejs',ejsMate);
    app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res)=>{
    res.send("hi,i am root");
});

//index route
app.get("/listings",wrapAsync(async(req,res)=>{
   const allListings=await Listing.find({});
   res.render("listings/index.ejs",{allListings});
    }));

//new route

app.get("/listings/new" , (req,res)=>{
    res.render("listings/new.ejs");
})


// show route
app.get("/listings/:id",wrapAsync(async(req,res)=>{
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show",{ listing});
}));

// create route
app.post("/listings",wrapAsync(async (req,res,next) =>{
     if(!req.body.listing){
        throw new ExpressError(400,"send valid data for listing");
    }
   const newListing= new Listing(req.body.listing);
   await newListing.save();
   res.redirect("/listings");


})
);


// edit  route
app.get("/listings/:id/edit",wrapAsync (async(req,res) =>{
     let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
}));

// update route
app.put("/listings/:id" ,wrapAsync (async(req,res)=>{
    if(!req.body.listing){
        throw new ExpressError(400,"send valid data for listing");
    }
    let {id} = req.params;
   await Listing.findByIdAndUpdate(id, {...req.body.listing});
   res.redirect(`/listings/${id}`);
}));

// DELETE ROUTE
app.delete("/listings/:id",wrapAsync (async (req,res)=>{
    let {id} = req.params;
    let deletedListing= await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));


/*
app.get ("/testListing", async(req,res)=>{
    let sampleListing = new Listing({
        title:"my new vila",
        description:"by the bench",
        price:1200,
        location:"calgute,goa",
        country:"india"
    });
     await sampleListing.save();
     console.log("sample was saved");
     res.send("successful testing");
});
*/

app.all("/{*splat}",(req,res,next)=>{
    next(new ExpressError(404,"page not found"));
});

app.use((err,req,res,next)=>{
    let{statusCode=500,message="Something went wrong!"}=err;
   res.status(statusCode).render("Error.ejs",{message});
   
});

app.listen(3000,() =>{
    console.log("server is listening to port 30000");
});