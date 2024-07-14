const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://ipsum-alpha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.options('*', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://ipsum-alpha.vercel.app');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.send();
  });

dotenv.config({path: './secret.env'})



PORT = process.env.PORT || 3000 

// Importing Routes
const mainRoute = require('./routes/mainRoute')
const { default: mongoose } = require('mongoose')

const MONGOOSE_USERNAME = process.env.MONGO_USERNAME
const MONGO_PASSWORD = process.env.MONGO_PASSWORD

const MONGOOSE_URI = `mongodb+srv://${MONGOOSE_USERNAME}:${MONGO_PASSWORD}@cluster0.ppfuij5.mongodb.net/infoCollection?retryWrites=true&w=majority&appName=Cluster0`

app.set('port', process.env.PORT || 4000);
app.use('/', mainRoute)
app.use(express.urlencoded({extended: false}))
app.disable('x-powered-by')


mongoose.connect(MONGOOSE_URI)
    .then(() => app.listen(app.get('port'), () => {console.log("Running on port 4000.")}))
    .catch((err) => console.log(err))







