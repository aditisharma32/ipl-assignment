import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MatchList = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    axios.get('https://ipl-assignment.onrender.com/api/matches')
      .then(res => setMatches(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      {matches.map((match, index) => (
        <div key={index} style={{
          border: '1px solid #ccc',
          padding: '15px',
          margin: '10px auto',
          maxWidth: '500px',
          borderRadius: '8px'
        }}>
          <h2>{match.team1} vs {match.team2}</h2>
          <p><strong>{match.team1}:</strong> {match.score1} ({match.overs1} overs) - {match.wickets1} wickets</p>
          <p><strong>{match.team2}:</strong> {match.score2} ({match.overs2} overs) - {match.wickets2} wickets</p>
          <p>Status: <span style={{ color: match.status === 'Live' ? 'green' : 'gray' }}>{match.status}</span></p>
        </div>
      ))}
    </div>
  );
};

export default MatchList;
