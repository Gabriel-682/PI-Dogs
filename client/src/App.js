import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import HomePage from "./components/HomePage/HomePage";
import DetailPage from "./components/DetailPage/DetalPage";
import FormPage from "./components/FormPage/FormPage";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <div className="App">
      <h1>Henry Dogs</h1>
      <Switch>
        <Route path="/">
          <LandingPage />
        </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/detail">
          <DetailPage />
        </Route>
        <Route path="/form">
          <FormPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
