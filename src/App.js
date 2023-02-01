import MainContainer from "components/Elements/MainContainer";
import './fonts/DeterminationMonoWebRegular-Z5oq.ttf'
import { useState ,useContext, useEffect } from "react";
import { ThemeContext } from "context/Themes";
import { LanguageContext } from "context/Languages/LanguageContext";
import Modal from 'react-modal'

Modal.setAppElement('#root');

function App() {
  const { theme } = useContext(ThemeContext);
  const [language, setLanguage] = useState("portuguese");
  function toggleLanguage() {
    setLanguage((language) => (language === "portuguese" ? "english" : "portuguese"));
    localStorage.setItem("language", language)
  }

  return (

      
<div className={`rpgui-content ${theme}`}>
  <LanguageContext.Provider value={{language, toggleLanguage}}>
  <MainContainer  />

  </LanguageContext.Provider>
    </div>

  );
}

export default App;
