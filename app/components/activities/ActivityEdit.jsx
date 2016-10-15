import React, { PropTypes } from 'react'

class ActivityEdit extends React.Component {

  state = {
    description: ''
  }

  componentDidMount() {
    const { description } = this.props;
    this.setState({ description });
  }

  onChange = ({ target : { value : description }}) => {
    this.setState({ description });
  }

  render () {
    const { state: { description }, onChange } = this;
    return (
      <div>
        <input onChange={onChange} type="text" value={description} />
      </div>
    );
  }
}

export default ActivityEdit;
