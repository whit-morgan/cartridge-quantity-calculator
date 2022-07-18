const express = require('express')
const app = express()
const PORT = 8080

app.use(express.static('public'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server is runing on port ${PORT}`)
})