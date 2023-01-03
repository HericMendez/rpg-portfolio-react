import MainWindow from "components/Elements/MainWindow";
import './fonts/DeterminationMonoWebRegular-Z5oq.ttf'
import { useState ,useContext } from "react";
import { ThemeContext } from "context/Themes";
import { LanguageContext } from "context/Languages/LanguageContext";
function App() {
  const { theme } = useContext(ThemeContext);
  const [language, setLanguage] = useState("portuguese");
  function toggleLanguage() {
    setLanguage((language) => (language === "portuguese" ? "english" : "portuguese"));
  }

  return (

      
<div className={`rpgui-content ${theme}`}>
  <LanguageContext.Provider value={{language, toggleLanguage}}>
  <MainWindow  />

  </LanguageContext.Provider>
    </div>

  );
}

export default App;
