import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import DetailPage from "./components/DetailPage/DetalPage";
import FormPage from "./components/FormPage/FormPage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
