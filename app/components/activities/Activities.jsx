import React, { PropTypes } from 'react';
import Activity from 'components/activities/Activity.jsx';
import ActivityEdit from 'components/activities/ActivityEdit.jsx';

class Activities extends React.Component {

  static propTypes = {
    activities: PropTypes.array.isRequired,
  }

  state = {
    editable_id: null,
    activities: [],
  }

  componentDidMount() {
    fetch('/activities.json')
      .then(response => response.json())
      .then(activities => this.setState({
        ...this.state,
        activities,
      }))
  }

  onEdit = ({ target: { dataset: { id: editable_id } }}) => {
    this.setState({
      ...this.state,
      editable_id,
    });
  }

  mapActivity = item => {
    const { editable_id } = this.state;
    const id = `activity-${item.id}`;
    const container = (editable_id === id) ?
      <ActivityEdit
        key={id}
        {...item}
        id={id}
      /> :
      <Activity
        key={id}
        onEdit={this.onEdit}
        {...item}
        id={id}
      />;
    return container;
  }

  render() {
    const { activities } = this.state;
    const list = activities.map(this.mapActivity, this);
    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Activities;
