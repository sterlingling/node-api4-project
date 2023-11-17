require('dotenv').config();
const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 8001

const server = express();
server.use(express.json());
server.use(cors());

server.get('/api/hello', (req, res) => {
    res.json({ message: 'api is working!' })
})

server.use('*', (req, res, next) => {
    res.send(`<h1>Hello, there!</h1>`);
})

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(500).json({
        message: err.message,
        stack: err.stack
    })
})

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
