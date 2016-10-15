import React, { PropTypes } from 'react'

class Activity extends React.Component {
  render () {
    const onEdit = this.props.onEdit;
    const id = this.props.id;
    const description = this.props.description;
    return (
      <div data-id={id} onClick={onEdit}>{description}</div>
    );
  }
}

export default Activity;
