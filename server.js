const express = require('express')

//middlewares
const logger = require('./middlewares/logger')
const sessions = require('./middlewares/sessions')

//controllers
const usersController =require('./controllers/users_controller')
const sessionsController =require('./controllers/sessions_controller')
const suggestionsController =require('./controllers/suggestions_controller')
const weatherController =require('./controllers/weather_controller')
const collectionController =require('./controllers/collections_controller')

const app = express()
const port = process.env.PORT || 4002;

// start the web server
app.listen(port, () => console.log(`listening on http://localhost:${port}`))


app.use(logger)
app.use(express.static('client'))
app.use(express.json())
app.use(sessions)
app.use('/api/users', usersController)
app.use('/api/sessions', sessionsController)
app.use('/api/suggestions', suggestionsController)
app.use('/api/weather',weatherController)
app.use('/api/collection',collectionController)
