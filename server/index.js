// import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'

import courseRoutes from './routes/courses.js'

const app = express()


// app.use(bodyParser.json({ limit: "30mb", extended : true}));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}));


mongoose.set("strictQuery", false)
mongoose.
    connect('mongodb+srv://project2:project2@cluster0.nh4rgg4.mongodb.net/?retryWrites=true&w=majority')
    
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(3000, () => {
            console.log(`Node API app is running on port 3000`)
        });
    }).catch((error) => {
        console.log(error)
    })