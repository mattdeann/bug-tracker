import React from 'react';
import './BugCard.css';

function BugCard(props) {
  const {name, priority, version} = props.bug;
  const handleClick = () => {
    // clicked(name);
  }

  return (
    <div className="bug-card" onClick={handleClick}>
      <h2 className="name">{name}</h2>
      <h4 className="name">Priority {priority}</h4>
      <h5 className="name">{version}</h5>
    </div>
  )
}

export default BugCard;