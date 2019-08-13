import React from "react";

import "./Main.css";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Testing from "./Testing";
import Default from "./Default";
import Footer from "./Footer";
import Form from "./Form";
import PageContent from "./PageContent";
import { ThemeProvider } from "./contexts/ThemeContext";

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <ThemeProvider>
      <PageContent>
        <Navbar />
        <Header />
        <Form />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/testing" component={Testing} />
          <Route path="/" component={Default} />
        </Switch>
        <Footer />
      </PageContent>
    </ThemeProvider>
  );
}

export default App;
