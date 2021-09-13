import React from "react";

export default function StoreCard(props) {
  return (
    <div>
      <div className="card" onClick={props.onclick}>
        <div className="card_container">
          <h5>{props.text}</h5>
        </div>
      </div>
    </div>
  );
}
