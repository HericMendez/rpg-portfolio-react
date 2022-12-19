import React from "react";
import Flappy from "../../../assets/images/project-screenshots/flappy.png";
const Quests = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-around",
        paddingLeft: "1vw",
        paddingRight: "1vw",
        paddingTop: '2vh',
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "30vw", marginTop: '4vh',  }}>
        <div>
          <div
            className="rpgui-container framed"
            style={{width: '30vw', top: '17vh', height: "fit-content", marginBottom: "3vh", background: '#222' }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-around",
                borderWidth: 2,
              }}
            >
              <img
                style={{  width: "75%", padding: 1 }}
                src={Flappy}
              />
              <div  style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "spaxe-around",
      
              }}>
                <button class="rpgui-button" type="button" style={{margin: 10}}><p>Live Demo</p></button>
                
                <button class="rpgui-button " disabled={true} type="button" style={{margin: 10}}><p>View Code</p></button>
              </div>
            </div>
          </div>
          <select
            onClick={(e) => console.log(e.target.value)}
            style={{ position: 'absolute', bottom: '6vh', width: "30vw", height: "25vh", overflowY: "scroll" }}
            class="rpgui-list-imp"
            size="9"
          >
            <option value="option1">aaaaasdebfs</option>
            <option value="option2">option2</option>
            <option value="option3">option3</option>
            <option value="option4">option4</option>
            <option value="option5">option5 </option>
            <option value="option6">option6</option>
            <option value="option7">option3</option>
            <option value="option8">option4</option>
            <option value="option9">option5 </option>
            <option value="option10">option6</option>
            <option value="option11">option3</option>
            <option value="option12">option4</option>
            <option value="option13">option5 </option>
            <option value="option14">option6</option>
          </select>
        </div>
      </div>
      <div
        style={{
    
          width: "35vw",

        }}
      >
        <div >
          <div className="">
            <h1>FlappyVania</h1>
            <h3>Personal Project</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sed risus vel nunc vulputate cursus non non dolor. Pellentesque
              maximus tempor enim, eu feugiat velit fermentum vel. Suspendisse
              finibus pharetra interdum.
        
            </p>
            <p>
            Vestibulum ut convallis velit. Ut mattis velit est, nec lobortis augue gravida et. Phasellus a aliquam neque, non vehicula elit. Vestibulum eget egestas elit.
            </p>

            <hr className="golden" />

            <div>
              <h4>Tech i used in this project:</h4>
              <p>&nbsp;→ HTML (Canvas)</p>
              <p>&nbsp;→ CSS</p>
              <p>&nbsp;→ Javascript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quests;
