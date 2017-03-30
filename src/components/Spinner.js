import React from 'react';

/**
 * Simple Spinner/Alert Message
 */
export default function Spinner(props) {
   return (
      <div className="spinner">
         {props.message && <div className={"result alert alert-" + props.urgency}>{props.message}</div> }
         <button type="button" className="btn btn-primary btn-lg" onClick={props.onSpin}>Spin the Wheel!</button>
      </div>
   );
}

Spinner.propTypes = {
  message: React.PropTypes.string,
  urgency: React.PropTypes.string,
  onSpin: React.PropTypes.func
};