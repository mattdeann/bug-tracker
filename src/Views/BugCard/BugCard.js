import React from 'react';
import './BugCard.css';

function BugCard(props) {
  const clicked = () => {
    props.clicked(props.name);
  }

  return (
    <div className="bug-card" onClick={clicked}>
      <h2 className="name">{props.name}</h2>
      <h4 className="name">Priority {props.priority}</h4>
      <h5 className="name">{props.version}</h5>
    </div>
  )
}

export default BugCard;