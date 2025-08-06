const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Match = require('./models/Match');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/ipl-dashboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/api/matches', async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

app.listen(5000, () => console.log('Server started on port 5000'));
