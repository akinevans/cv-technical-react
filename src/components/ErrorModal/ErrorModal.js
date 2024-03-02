import React from "react";
import "./ErrorModal.css";

export default function ErrorModal(props) {
  return (
    <div className={`error-modal-wrapper ${props.className}`}>
      <p className='error-message'>{props.message}</p>
      <div className='arrow-right'></div>
    </div>
  );
}
