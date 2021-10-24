import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// import './qq.css';
import Produce from "./components/produce";
import ListCom from "./components/ListCom";
import Cart from "./components/Cart";
import Register from "./components/Register";
import './q.css';




export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      
      <Router>
        <Switch>
          <Route exact path="/">
            
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
          </Route>
          <Route exact path="/ListCom">
          <ListCom/>
          </Route>
          <Route exact path="/produce/:pro_id">
            <Produce />
          </Route>
          <Route exact path="/Cart">
            <Cart />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}