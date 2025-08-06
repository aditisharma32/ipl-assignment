const mongoose = require('mongoose');
const Match = require('./models/Match'); // adjust path if needed

const insertDummyData = async () => {
  await mongoose.connect('mongodb://localhost:27017/ipl-dashboard');

  console.log("🧹 Clearing old data...");
  await Match.deleteMany({}); // ✅ DELETE OLD RECORDS FIRST

  const matches = [
    {
      team1: 'CSK',
      team2: 'MI',
      score1: '150/5',
      score2: '145/7',
      overs1: '18.2',
      overs2: '20',
      wickets1: 5,
      wickets2: 7,
      status: 'Live',
    },
    {
      team1: 'RCB',
      team2: 'KKR',
      score1: '180/6',
      score2: '178/9',
      overs1: '20',
      overs2: '20',
      wickets1: 6,
      wickets2: 9,
      status: 'Completed',
    },
    {
      team1: 'RR',
      team2: 'MI',
      score1: '150/5',
      score2: '145/7',
      overs1: '18.2',
      overs2: '20',
      wickets1: 5,
      wickets2: 7,
      status: 'Live',
    }
  ];

  await Match.insertMany(matches);
  console.log("✅ Dummy data inserted!");
  process.exit();
};

insertDummyData();
