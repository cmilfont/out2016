import React from 'react';
import Activity from './Activity.jsx';

class Activities extends React.Component {

  static propTypes = {
    activities: React.PropTypes.array.isRequired,
  }

  onEdit(event) {
    console.log(event, this);
  }

  mapActivity(item) {
    return (
      <Activity onEdit={this.onEdit} description={item.description} />
    );
  }

  render() {

    const list = this.props.activities.map(this.mapActivity, this);

    return (
      <div>
        {list}
      </div>
    );
  }
}

export default Activities;
