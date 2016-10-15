import React from 'react';
import ReactDOM from 'react-dom';
import Activities from 'components/activities/Activities.jsx';

const activities = [
  {
    id: 30,
    date: new Date,
    type: {
      description: 'MEETING'
    },
    description: 'Reunião as 13'
  },
  {
    id: 36,
    date: new Date,
    type: {
      description: 'WORKOUT'
    },
    description: '#fikgrandeporra #saimonstro #birl'
  },
];

ReactDOM.render(<Activities activities={activities} />,
  document.getElementById('app'));
