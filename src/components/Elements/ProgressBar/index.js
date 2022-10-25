import React from "react";
import './styles.css'

const ProgressBar = (props) => {
  return (
    <div className="container-bar">
      <label>{props.label ? props.label : "Progress:"}</label>
      <div class="rpgui-progress" data-rpguitype="progress">
        <div class=" rpgui-progress-track">
          <div
            class={`rpgui-progress-fill ${props.color? props.color : ""}`}
            style={{ left: "0px", width: `${props.fill ? props.fill : "100"}` }}
          ></div>
        </div>
        <div class=" rpgui-progress-left-edge"></div>
        <div class=" rpgui-progress-right-edge"></div>
      </div>
    </div>
  );
};

export default ProgressBar;

