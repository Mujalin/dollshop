import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Product from "./components/ListCom";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
// import './qq.css';
import Produce from "./components/produce";
import ListCom from "./components/ListCom";



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
        </Switch>
      </Router>
    </main>
  );
}