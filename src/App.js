// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "./component/header/Navbar";
import React from "react";
import About from "./component/about/about";
import Home from "./component/home/Home";
import Skills from "./component/skills";
import SignUp from "./component/signup";
import Contact from "./component/contact";
import Navbar from "./component/header/Navbar";
import Language from "./component/language/Language";
import Footer from "./component/footer/Footer";

const App = () => {
  return (
    <>
      <Language />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/skills" component={Skills} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
