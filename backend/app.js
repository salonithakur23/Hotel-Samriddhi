const express = require("express");
const app = express();





// ADD THIS
var cors = require('cors');
app.use(cors());
app.use(express.json());



//all routes import 
const item= require("./routes/itemRoute");
const employee= require("./routes/employeeRoute");
const room= require("./routes/roomRoute");
const guest= require("./routes/guestRoute");
const roomservice = require("./routes/roomServiceRoute")
const roombooking = require("./routes/roomBookingRoute")
const order = require("./routes/orderRoute")
const category = require("./routes/categoryRoute")
const bill = require("./routes/billRoute")





app.use("/api/v1",item);
app.use("/api/v1",employee);
app.use("/api/v1",room);
app.use("/api/v1",guest);
app.use("/api/v1",roomservice);
app.use("/api/v1",roombooking);
app.use("/api/v1",order);
app.use("/api/v1",category);
app.use("/api/v1",bill)








module.exports = app;