const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")
app.use(express.json())

app.use(cors({
    origin:"*",
    methods:["GET"]
}))

app.get('/', (req, res) => {
  res.send({svar: "svaret"})
})
app.get('/svar1', (req, res) => {
    res.send({svar:'4759'})
  })
  app.get('/svar2', (req, res) => {
    res.send({svar: 'detteerpassordet'})
  })
  app.get('/svar3', (req, res) => {
    res.send('bilde')
  })
  app.get('/svar4', (req, res) => {
    res.send('safe')
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})