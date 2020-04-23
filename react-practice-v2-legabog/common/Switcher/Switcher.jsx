import React from "react";
import classes from "./Switcher.module.css";

const Switcher = (props) => {
    let c = document.querySelector(`#customSwitch1`)
    
  return (
    <div className={classes.switcher}>
      <div className="custom-control custom-switch">
        <input
          type="checkbox"
          className="custom-control-input"
          id="customSwitch1"
          checked="false"
        />{(c.checked) ? alert('Checked1') : alert('Checked2')}
        <label
          className="custom-control-label"
          for="customSwitch1"
          style={{ fontSize: "140%" }}
        >
          <strong>Switcher RU News/US News</strong>
        </label>
      </div>
    </div>
  );
};

export default Switcher;
