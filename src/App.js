import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<SearchPage/>} />
        <Route path="/image/:id" element={ <ImageDetails/>} />
      </Routes>
    </Router>
  );
}

export default App;
