import "./styles.css";
import Text from "../../../context/Languages/MultiLingualContent";
import TorielEng from '../../../assets/images/page404/toriel_404_eng.png'
import TorielPt from '../../../assets/images/page404/toriel_404_pt.png'
import { LanguageContext } from "context/Languages/LanguageContext";
import { useContext } from "react";
import { ThemeContext } from 'context/Themes';
const Page404 = () => {
  const {language} = useContext(LanguageContext)
  const {theme} = useContext(ThemeContext)  
  console.log(theme)

  return (
    <div className="page404">
      <img src={language==='portuguese'? TorielPt : TorielEng} alt="" />
      <div className="dialog-box" >
        <p>
          <Text contentID='page404_p_1'/>
        </p>
        <p> <Text contentID='page404_p_2'/></p>
        <p >
        <Text contentID='page404_p_3'/>
        </p>

      </div>
      <div id="buttons">

          <button className="rpgui-button" style={{color: theme === "undertale-theme" ? "#fff " : "#000", fontSize: '3vh'}}>RETURN HOME</button>
      </div>
    </div>
  );
};

export default Page404;
