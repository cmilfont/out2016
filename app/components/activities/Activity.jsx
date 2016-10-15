import React, { PropTypes } from 'react'

class Activity extends React.Component {
  render () {
    const onEdit = this.props.onEdit;
    const description = this.props.description;
    return (<div onClick={onEdit}>{description}</div>);
  }
}

export default Activity;
