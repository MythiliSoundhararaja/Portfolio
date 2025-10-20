import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Default imports (match your Home.tsx export)
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import Awards from "./screens/Awards/Awards";
import Contact from "./screens/Contact/Contact";

const App = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/awards" element={<Awards />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
