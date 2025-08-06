const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Match = require('./models/Match');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.get('/api/matches', async (req, res) => {
  const matches = await Match.find();
  res.json(matches);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
