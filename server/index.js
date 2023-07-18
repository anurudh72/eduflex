import bodyParser from 'body-parser'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import router from './routes/courses.js'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use('/home', router)

const connection_URL = 'mongodb+srv://project2:project2@cluster0.nh4rgg4.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000;

mongoose.set("strictQuery", false)
mongoose.
    connect(connection_URL)

    .then(() => {
        console.log('connected to MongoDB')
        app.listen(PORT, () => {
            console.log(`Node API app is running on port ${PORT}`)
        });
    }).catch((error) => {
        console.log(error)
    }) 
