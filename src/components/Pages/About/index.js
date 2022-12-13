import React, { useState } from "react";

const About = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Wa");
  return (
    <div>
      <h1>About</h1>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://ronenness.github.io/RPGUI/"
      >
        https://ronenness.github.io/RPGUI/
      </a>
      <div>
        <p>Dropdown:</p>
        <select onClick={(e)=> console.log(e.target.value)}  class="rpgui-dropdown-imp" data-rpguitype="dropdown">
          <option
            style={{ color: "#222", background: "#cccaba" }}
            value="Warrior"
            selected=""
          >
            Warrior
          </option>
          <option style={{ color: "#222", background: "#cccaba" }} value="Mage">
            Mage
          </option>
          <option
            style={{ color: "#222", background: "#cccaba" }}
            value="Rogue"
          >
            Rogue
          </option>
          <option
            style={{ color: "#222", background: "#cccaba" }}
            value="Ranger"
          >
            Ranger
          </option>
        </select>
      </div>
      <br />
      <div>
        <p>list:</p>
        <select onClick={(e)=> console.log(e.target.value)} style={{width: 300, height: 100, overflowY: "scroll"}} class="rpgui-list-imp" size="5">
          <option value="option1">option1</option>
          <option value="option2">option2</option>
          <option value="option3">option3</option>
          <option value="option4">option4</option>
          <option value="option5">option5 </option>
          <option value="option6">option6</option>
          <option value="option3">option3</option>
          <option value="option4">option4</option>
          <option value="option5">option5 </option>
          <option value="option6">option6</option>
          
        </select>
      </div>
    </div>
  );
};

export default About;
