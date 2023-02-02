import React from "react";
import './styles.css'

const  ProgressBar = (props) => {
  return (
    <div className="container-bar">
      <label>{props.label ? props.label : "Progress:"}</label>
      <div className="rpgui-progress" data-rpguitype="progress">
        <div className=" rpgui-progress-track">
          <div
            className={`rpgui-progress-fill ${props.color? props.color : ""}`}
            style={{ left: "0px", width: `${props.fill ? props.fill : "100"}` }}
          ></div>
        </div>
        <div className=" rpgui-progress-left-edge"></div>
        <div className=" rpgui-progress-right-edge"></div>
      </div>
    </div>
  );
};

export default ProgressBar;

