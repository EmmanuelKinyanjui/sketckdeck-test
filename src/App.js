import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from './components/LandingPage';
import SearchPage from "./components/SearchPage";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/search" element={<SearchPage/> } />
        <Route path="/image/:id" element={ <ImageDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
