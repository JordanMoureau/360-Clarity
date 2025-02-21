import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import WorkplaceQuiz from "./components/QuizComponent"; // Import the Quiz Component

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/quiz" element={<WorkplaceQuiz />} />
    </Routes>
  );
}

export default App;
