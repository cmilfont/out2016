import React, { PropTypes } from 'react';
import TopToolbar from 'third/reactivo/TopToolbar.jsx';
import MonthTable from 'third/reactivo/MonthTable.jsx';
import BottomToolbar from 'third/reactivo/BottomToolbar.jsx';
import moment from 'moment';

class Calendar extends React.Component {

  state = {
    date: new Date(),
  }

  onNavigate = (direction) => {
    if (direction === 'left') {
      const date = moment(this.state.date).subtract(1, 'months')._d;
      this.setState({ date });
    }
  }

  onSelect = (date) => {

  }

  onSave = () => {

  }

  render () {
    const { date } = this.state;
    const onLeft = this.onNavigate.bind(this, 'left');
    const onRight = this.onNavigate.bind(this, 'right');
    return (
      <div>
        <TopToolbar
          date={date}
          onLeft={onLeft}
          onRight={onRight}
        />
        <MonthTable
          date={date}
          onSelect={this.onSelect}
        />
        <BottomToolbar
          onSave={this.onSave}
        />
      </div>
    );
  }
}

export default Calendar;
