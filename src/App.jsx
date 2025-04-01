
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import Providers from "./components/Providers";
import './assets/fonts/fonts.css'

function App() {
  return (
    <div dir="rtl">
      <Providers>
        <MainComponent />
      </Providers>
    </div>
  );
}

export default App;
