const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

const mongoUrl = config.MONGODB_URI
logger.info('Connecting to ', mongoUrl)

mongoose.connect(mongoUrl)
    .then(() => {
        logger.info('Connected to ', mongoUrl)
    })
    .catch ((error) => {
        logger.error('Error connecting to database', error.message)
    })

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app