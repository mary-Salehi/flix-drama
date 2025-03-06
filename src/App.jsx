import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }
  return (
    <div dir="rtl" className={isDarkMode ? 'dark' : ''}>
      <MainComponent setIsDarkMode={handleDarkMode} isDarkMode={isDarkMode}/>
    </div>
  );
}

export default App;
