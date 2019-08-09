import React from "react";
import "./App.css";
import "./Main.css";
import Header from "./Header";
import About from "./About";
import Testing from "./Testing";
import Default from "./Default";
import Footer from "./Footer";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <h1>This is the august react testing app.</h1>

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/testing" component={Testing} />
        <Route path="/" component={Default} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
