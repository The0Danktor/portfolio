import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNotFound";
import { Projects } from "./pages/Projects";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" key="HomePage" element={<HomePage />} />
          <Route path="/*" key="NotFound" element={<PageNotFound/> }/>
          <Route path="/projects" key="Projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
