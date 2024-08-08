
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('../backend/router/auth')
const locationRoutes = require('../backend/router/location')
const app = express();
const cors = require('cors')
app.use(express.json());
app.use(bodyParser.json());


app.use(cors())
app.use('/api/user', userRoutes);
app.use('/api/location', locationRoutes);

app.get('/', (req, res) => {
  res.send("Hi");
})


app.listen(5000, () => {
  console.log("Server listening in http://localhost:5000")
})



