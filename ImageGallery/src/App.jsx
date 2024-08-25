import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Photos from "./pages/Photos";
import PhotoDetails from "./pages/PhotoDetails";
import './App.css'
function App() {
  return (
    <Router>
      <div className="outer-heading">
        <h1 id="heading">
          <Link to="/">IMAGE GALLERY</Link>
        </h1>
      </div>
      
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/photos/:id" element={<PhotoDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
