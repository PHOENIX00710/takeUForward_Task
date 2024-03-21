import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SubmitResponse from "./Components/SubmitResponse/SubmitResponse";
import Results from "./Components/Results/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SubmitResponse />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
