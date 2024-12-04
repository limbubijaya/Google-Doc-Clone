import "./App.css";
import Quil from "./Quil";
import { Routes, Route, Navigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigate to={`/documents/${uuidV4()}`} exact/>} />
        <Route path="/documents/:id" element={<Quil />} />
      </Routes>
    </div>
  );
}

export default App;
