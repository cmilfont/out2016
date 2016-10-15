import React, { PropTypes } from 'react';
import SelectedDate from 'third/reactivo/SelectedDate.jsx';
import Calendar from 'third/reactivo/Calendar.jsx';

class ReactivoDatePicker extends React.Component {

  showDialog = () => {
    console.log(this.refs.dialog);
    this.refs.dialog.show();
  }

  render() {
    const { date } = this.props;
    return (
      <div className="ReactivoDatePicker">
        <input type="text" onClick={this.showDialog} />
        <dialog ref="dialog" className="Dialog">
          <SelectedDate />
          <Calendar date={date}/>
        </dialog>
      </div>
    );
  }
}

export default ReactivoDatePicker;
