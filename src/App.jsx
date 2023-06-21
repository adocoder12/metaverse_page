//Css
import "./App.css";

//Components
import Header from "./Components/Header";
import LandingPage from "./Components/LandingPage";
import Sponsors from "./Components/Sponsors";
//imgs
import logo_main from "@assets/logoMain.png";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="main_container">
        <LandingPage image={logo_main} />
        <Sponsors />
      </div>
    </div>
  );
}

export default App;
