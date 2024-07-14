const express = require('express')
const dotenv = require('dotenv')

const app = express()
app.use(express.json())



dotenv.config({path: './secret.env'})



PORT = process.env.PORT || 3000 

// Importing Routes
const mainRoute = require('./routes/mainRoute')
const { default: mongoose } = require('mongoose')

const MONGOOSE_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

const MONGOOSE_URI = `mongodb+srv://${MONGOOSE_USERNAME}:${MONGO_PASSWORD}@cluster0.ppfuij5.mongodb.net/infoCollection?retryWrites=true&w=majority&appName=Cluster0`

mongoose.connect(MONGOOSE_URI)
    .then(() => startServer())
    .catch((err) => console.log(err))


app.set('port', process.env.PORT || 4000);

app.use('/', mainRoute)
app.use(express.urlencoded({extended: false}))
app.disable('x-powered-by')


function startServer() {
    app.listen(app.get('port'), () => {
        console.log("Running on port 4000.")
    })
}
