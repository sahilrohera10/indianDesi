import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from "./Pages/Details";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/enter-details" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
