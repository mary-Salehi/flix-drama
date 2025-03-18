
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MainComponent from "./components/MainComponent";
import Providers from "./components/Providers";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Posts from "./pages/Posts";
import Home from "./pages/Home";

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
