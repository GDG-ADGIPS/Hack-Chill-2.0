import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Faq from "./components/faq";
import Herosection from "./components/Herosection";
import About from "./components/About";
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      {/* <Partners />
      <Faq /> */}
    </div>
  );
}

export default App;
