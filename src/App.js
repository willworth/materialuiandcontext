import React from "react";

import "./Main.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Testing from "./Testing";
import Default from "./Default";
import Footer from "./Footer";
import Form from "./Form";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <h1>This is the react testing app.</h1>
      <Form />

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
