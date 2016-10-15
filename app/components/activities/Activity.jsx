import React, { PropTypes } from 'react'

const Activity = ({ id, description, onEdit }) => (
  <div data-id={id} onClick={onEdit}>{description}</div>
);

Activity.propTypes = {
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Activity;
