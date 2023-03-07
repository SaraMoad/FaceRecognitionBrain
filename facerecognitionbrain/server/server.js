const express = require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');
const knex = require('knex')
const register = require('./controllers/register')
const signin = require('./controllers/signin')
const profile = require('./controllers/profile')
const image = require('./controllers/image')

const db = knex({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    port : 4000,
    user : 'postgres',
    password : 'Rahalla',
    database : 'smart-brain'
  }
});

db.select('*').from('users').then(data => {
    console.log(data)
}) 

const app = express();
app.use(bodyParser.json());

app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
   res.send("Success")
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt) }) 

app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)}) 
   
app.get('/profile/:id', (req, res) => { profile.handleprofileGet(req, res, db) })    
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })
app.put('/image', image.handleImage(db))

