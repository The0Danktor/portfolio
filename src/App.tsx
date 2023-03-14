import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { PageNotFound } from "./pages/PageNotFound";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" key="HomePage" element={<HomePage />} />
          <Route path="/*" key="NotFound" element={<PageNotFound/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
