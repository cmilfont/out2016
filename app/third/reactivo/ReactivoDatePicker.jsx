import React, { PropTypes } from 'react'

class ReactivoDatePicker extends React.Component {

  showDialog = () => {
    console.log(this.refs.dialog);
    this.refs.dialog.show();
  }

  render() {
    return (
      <div className="ReactivoDatePicker">
        <input type="text" onClick={this.showDialog} />
        <dialog ref="dialog">
          Calendario
        </dialog>
      </div>
    );
  }
}

export default ReactivoDatePicker;
