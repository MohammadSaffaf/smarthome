const express = require('express')
const app = express()
const PORT = 5500
const router = require('./routing')
app.use(express.static('public'))

app.use(router)
app.use((req, res)=>{
    res.status(404).send('Sorry no page find')
})
app.listen(PORT,() => console.log(`Server listening on http://localhost:${PORT}`))