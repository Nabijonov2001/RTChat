const express = require('express')
const http = require('http')
const socket = require('socket.io')
const path = require('path')

const app  = express()
const server = http.createServer(app)
const io = socket(server)

// Static folder
app.use(express.static(path.join(__dirname, '..', 'public')))

// Server port
const port = process.env.PORT || 3000
server.listen(port, ()=>{
    console.log(`Server is working on port ${port}`)
})