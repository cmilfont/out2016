import React from 'react';
import Activity from './Activity.jsx';
import ActivityEdit from './ActivityEdit.jsx';

class Activities extends React.Component {

  static propTypes = {
    activities: React.PropTypes.array.isRequired,
  }

  state = {
    editable_id: null,
    activities: [
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
  ]}

  onEdit = event => {
    const id = event.target.dataset.id;
    this.setState({
      activities: this.state.activities,
      editable_id: `activity-${id}`,
    });
  }

  mapActivity = item => {

    const container = (this.state.editable_id === `activity-${item.id}`) ?
      <ActivityEdit
        key={`activity-${item.id}`}
        description={item.description}
        id={item.id}
      /> :
      <Activity
        key={`activity-${item.id}`}
        onEdit={this.onEdit}
        description={item.description}
        id={item.id}
      />;

    return container;

  }

  render() {

    const list = this.state.activities.map(this.mapActivity, this);

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Activities;
