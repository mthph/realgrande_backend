const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const app = express()
const allrouter = require('./routes/allRoutes')
//type of data is json
app.use(express.json());

const cors = require('cors');
// let corsOptions = {origin:"http://localhost:3000"}
//app.use(cors(corsOptions))
app.use(cors());

const db = module.exports =()=>{
    try{
      mongoose.set("strictQuery", false);
      mongoose.connect('mongodb+srv://cluster0.cgw00z6.mongodb.net/realGrande?retryWrites=true&w=majority', { user: process.env.DBUSERNAME, pass: process.env.DBPASSWORD, useNewUrlParser: true, useUnifiedTopology: true })
      console.log("MongoDB Connection is Successful")
    } catch(error){
      console.log(error);
      console.log("MongoDB Connection is failed")
    }
  }
  db();
  
  
  app.use('/',allrouter);
  
  
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`)
  });
  
  
  
  
  
  
  