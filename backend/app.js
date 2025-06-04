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
    res.send({svar: 'bilde'})
  })
  app.get('/svar4', (req, res) => {
    res.send({svar: 'safe'})
  })
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  try {
    const user = await db.User.create({ username, passwordHash: hash });
    req.session.userId = user.id;
    res.send({ success: true });
  } catch (e) {
    res.status(400).send({ error: 'Username taken' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await db.User.findOne({ where: { username } });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).send({ error: 'Invalid credentials' });
  }
  req.session.userId = user.id;
  res.send({ success: true });
});