const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const PORT = 3000;

const {
    v4: uuidV4
} = require('uuid');

app.set('view engine', 'ejs');
app.set(express.static('public'));

//Routes
app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})
app.get('/:room', (req, res) => {
    res.render('room', {
        roomId: req.params.room
    })
})

server.listen(PORT);