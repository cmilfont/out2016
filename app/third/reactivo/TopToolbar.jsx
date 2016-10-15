import React, { PropTypes } from 'react';
import moment from 'moment';

class TopToolbar extends React.Component {
  render () {
    const { date, onLeft, onRight } = this.props;
    return (
      <div className="TopToolbar">
        <button onClick={onLeft} />
        <div className="month">{moment(date).format()}</div>
        <button onClick={onRight} />
      </div>
    );
  }
}

export default TopToolbar;
