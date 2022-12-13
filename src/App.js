import MainWindow from "components/Elements/MainWindow";
import './fonts/DeterminationMonoWebRegular-Z5oq.ttf'
import { useContext } from "react";
import { ThemeContext } from "Theme";

function App() {
  const { theme } = useContext(ThemeContext);
  return (

      
<div className={`rpgui-content ${theme}`}>
      <MainWindow  />
    </div>

  );
}

export default App;
