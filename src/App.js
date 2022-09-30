import "./App.css";

import Bikes from "./components/bikes";
import Scooters from "./components/scooters";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="scooters" element={<Scooters />} />
        <Route path="bikes" element={<Bikes />} />
        <Route path="reviews" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
