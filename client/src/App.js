import React from "react";

import "./App.scss";
import { Route } from "react-router-dom";
import Trailers from "./components/Trailers";
import TrailerAdd from "./components/TrailerAdd";
import Header from "./components/Header";
import TrailerInfo from "./components/TrailerInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={Trailers} />
      <Route exact path="/addTrailer" component={TrailerAdd} />
      <Route exact path="/trailerInfo/:id" component={TrailerInfo} />
    </div>
  );
}

export default App;
