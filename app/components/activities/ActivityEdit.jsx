import React, { PropTypes } from 'react';
import ReactivoDatePicker from 'third/reactivo/ReactivoDatePicker.jsx';

class ActivityEdit extends React.Component {

  state = {
    description: '',
    date: null,
  }

  componentDidMount() {
    const { description, date } = this.props;
    this.setState({ description, date });
  }

  onChange = ({ target : { value : description }}) => {
    this.setState({
      ...this.state,
      description,
    });
  }

  render () {
    const { state: { description, date }, onChange } = this;
    return (
      <div>
        <div>
          <ReactivoDatePicker value={date} />
        </div>
        <div>
          <input onChange={onChange} type="text" value={description} />
        </div>
      </div>
    );
  }
}

export default ActivityEdit;
