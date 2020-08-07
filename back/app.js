const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv/config')

app.use(cors());
app.use(bodyparser.json())
app.use(express.json())

//Import routes
const profileRoute = require('./routes/profile')
app.use(profileRoute)
const postRoute = require('./routes/post')
app.use(postRoute)

// connect to db
mongoose.connect(process.env.conString,{ 
         useUnifiedTopology: true, useNewUrlParser: true ,useCreateIndex: true,
        useNewUrlParser: true
    }, ()=>{
    console.log("Connected to DB")
})

// Start listening
app.listen(3030)
