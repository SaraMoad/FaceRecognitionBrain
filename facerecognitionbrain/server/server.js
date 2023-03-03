const express = require('express')
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
// app.use(express.static(__dirname + '/public'))
// app.use((req, res, next) => {
//     console.log('<h1>Hello</h1>')
//     next();
// });

app.use(cors( ))

const database = {
    users: [
        {
            id: '123',
            name: 'John',
            email: 'john@gmail.com',
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
          {
            id: '124',
            name: 'Sally',
            email: 'sally@gmail.com',
            password: 'bananas',
            entries: 0,
            joined: new Date()
        }
    ]
}

app.listen(3000, () => {
    console.log('app is running on port 3000')
});
// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

app.get('/', (req, res) => {
   res.send(database.users)
})

app.post('/signin', (req, res) => {
    if (req.body.email == database.users[0].email && req.body.password == database.users[0].password) {
        res.json('Success')
    } else {
        res.status(400).json('error logging in')
    }
})

app.post('/register', (req, res) => {
    const { email, name, password } = req.body;
    bcrypt.hash(password, saltRounds, function(err, hash) {
    // Store hash in your password DB. 
        console.log(hash)
});
    database.users.push({
            id: '125',
            name: name,
            email: email,
            password: password,
            entries: 0,
            joined: new Date()
    })
    res.json(database.users[database.users.length-1])
})

app.get('/profile/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.users.forEach(user => {
        if (user.id === id) {
            found = true;
            return res.json(user);
        } 
    })
    if (!found) {
        res.status(400).json('not')
    }
})

app.post('/image', (req, res) => {
    const { id } = req.body;
    let found = false;
    database.users.forEach(user => {
        console.log(user.id, id)
        if (user.id === id) {
            found = true;
            user.entries++
            return res.json(user.entries);
        } 
    })
    if (!found) {
        res.status(400).json('not found')
    }
}) 

// app.post('./profile', (req, res) => {
//     console.log(req.body)
//     const user = {
//         name: 'Sally',
//         hobby: 'soccer'
//     }
//     res.send(user)
// })

// root rout res - this is working, sign in riout - post with success/fail /register --> post = new user object.
// profile/:userId home screen get request = user
// ranking count of photo increases and keepps score. 
//image --> put update on user profile 