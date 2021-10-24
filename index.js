const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors())
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('hello, from me');
});
const users = [
    { id: 0, name: 'Fahad', email: 'mohammad@gmail.com' },
    { id: 1, name: 'Maria', email: 'mohammad@gmail.com' },
    { id: 2, name: 'Zaiyaan', email: 'mohammad@gmail.com' },
    { id: 3, name: 'Nahiyaaan', email: 'mohammad@gmail.com' },
    { id: 4, name: 'Ahnaaf', email: 'mohammad@gmail.com' },
    { id: 5, name: 'Faizaan', email: 'mohammad@gmail.com' },

]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searcResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searcResult);
    }
    else {
        res.send(users)
    }

    res.send(users)
});
// app .METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    res.json(newUser)
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);

})
app.get('/fruits/mangoes/fozli', (req, res) => {
    res.send('yummy');
})


app.listen(port, () => {
    console.log('listening to port', port);
})