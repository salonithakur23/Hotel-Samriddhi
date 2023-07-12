const express = require("express");
const app = express();
const bodyParser = require('body-parser');

// const routes = require('./routes/routes');

const authRoutes = require('./routes/auth');


// ADD THIS
var cors = require('cors');
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use('/api/v1/auth', authRoutes);

//all routes import 
const item= require("./routes/itemRoute");
const employee= require("./routes/employeeRoute");
const room= require("./routes/roomRoute");
const service= require("./routes/ServiceRoute");
const roomservice = require("./routes/roomServiceRoute")
const roombooking = require("./routes/roomBookingRoute")
const order = require("./routes/orderRoute")
const category = require("./routes/categoryRoute")
const bill = require("./routes/billRoute")
const roomcategory = require("./routes/roomcategoryRoute")
// const login = require('/main')






app.use("/api/v1",item);
app.use("/api/v1",employee);
app.use("/api/v1",room);
app.use("/api/v1",service);
app.use("/api/v1",roomservice);
app.use("/api/v1",roombooking);
app.use("/api/v1",order);
app.use("/api/v1",category);
app.use("/api/v1",bill)
app.use("/api/v1",roomcategory)


// app.use('/api', routes);




module.exports = app;