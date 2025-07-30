const express = require('express'),
    path = require('path'),
    port = 3000

const server = express()

server.use(express.static(path.join(__dirname, './')))

server.listen(port, () => {
    console.log('Listen on port', port)
})
