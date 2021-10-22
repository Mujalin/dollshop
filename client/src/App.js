import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import ListCom from "./components/ListCom";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import './qq.css';


export default function App() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      {/* <Navbar />
      <Product/>
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact /> */}
      <ListCom/>
    </main>
  );
}