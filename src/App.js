import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import ImageDetails from "./components/ImageDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={SearchPage} />
        <Route path="/image/:id" component={ImageDetails} />
      </Switch>
    </Router>
  );
}

export default App;
