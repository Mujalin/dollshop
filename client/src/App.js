import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Produce from "./components/produce";
import Cart from "./components/Cart";
import Mesproduct from "./components/Mesproduct";
import Login from "./components/Login";
import './q.css';
import InProduct from "./components/InProduct";
import Location from "./components/Location";
import NavbarAdmin from "./components/NavbarAdmin";
import Product from "./components/Product";
import Cargo from "./components/Cargo";
import Payment from "./components/Payment";
import Shoping from "./components/Shoping";



export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      
      {/* หน้าบ้าน */}
      <Router>
      
        <Switch>
          <Route exact path="/">
          <Navbar />
            <About />
            <Projects />
            <Testimonials />
            <Skills />
            <Contact />
          </Route>
          <Route exact path="/Product">
          <Navbar />
          <Product/>
          </Route>
          <Route exact path="/produce/:pro_id">
          <Navbar />
            <Produce />
          </Route>
          <Route exact path="/Cart">
          <Navbar />
            <Cart />
          </Route>
          <Route  exact path = "/Location">
          <Navbar />
            <Location/>
            </Route>
            <Route  exact path = "/payment">
          <Navbar />
            <Payment/>
            </Route>
            <Route  exact path = "/shoping">
          <Navbar />
            <Shoping/>
            </Route>
        </Switch>
      </Router>


{/* หลังบ้าน */}
      <Router>
        <Switch>
        <Route  exact path = "/Login">
        <Navbar />
            <Login/>
            </Route>
            <Route  exact path = "/Mesproduct">
            <NavbarAdmin/>
            <Mesproduct/>
            </Route>
            <Route  exact path = "/Inproduct">
            <NavbarAdmin/>
            <InProduct/>
            </Route>
            <Route  exact path = "/cargo">
            <NavbarAdmin/>
            <Cargo/>
            </Route>
        </Switch>
      </Router>
    </main>
  );
}