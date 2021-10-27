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
import Mesproduct from "./components/Mesproduct";
import Register from "./components/Register";
import './q.css';
// import Inproduct from "./components/Inproduct";
import Location from "./components/Location";
import EditPro from "./components/EditPro";
import NavbarAdmin from "./components/NavbarAdmin";



export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      
      
      <Router>
      
        <Switch>
          
          <Route exact path="/">
          <Navbar />
            <About />
            <Projects />
            <Skills />
            <Testimonials />
            <Contact />
          </Route>
          <Route exact path="/ListCom">
          <Navbar />
          <ListCom/>
          </Route>
          <Route exact path="/produce/:pro_id">
          <Navbar />
            <Produce />
          </Route>
          <Route exact path="/Cart">
          <Navbar />
            <Cart />
          </Route>
          <Route exact path="/MesPro">
            <Mesproduct />
            </Route>

          {/* <Route  exact path = "/Inpro">
            <Inproduct/>
            </Route> */}
          <Route  exact path = "/Location">
          <Navbar />
            <Location/>
            </Route>
            <Route  exact path = "/EdPro">
            <EditPro/>
            </Route>
        </Switch>
      </Router>
      <Router>
        
        <Switch>
        <Route  exact path = "/Register">
        <NavbarAdmin/>
            <Register/>
            </Route>
        </Switch>
      </Router>
    </main>
  );
}