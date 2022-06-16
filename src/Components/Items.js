import React from 'react';

function Items(props) {
  return (
    <div className="item-clear">
      <p>
        <span className="items-left">{props.counter}</span>
        {props.counter === 1 ? ` Item Left` : ` Items Left`}
      </p>

      <button className="clear-completed" onClick={props.onClick}>
        Clear Completed
      </button>
    </div>
  );
}

export default Items;
