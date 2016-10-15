import React, { PropTypes } from 'react'

class ActivityEdit extends React.Component {

  state = {
    description: ''
  }

  componentDidMount() {
    this.setState({
      description: this.props.description,
    });
  }

  onChange = ({target : { value : description }}) => {
    this.setState({ description });
  }

  render () {
    const description = this.state.description;
    return (
      <div>
        <input onChange={this.onChange} type="text" value={description} />
      </div>
    );
  }
}

export default ActivityEdit;
