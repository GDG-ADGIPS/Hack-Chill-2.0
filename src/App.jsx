import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/Partners/Partners";
// import Faq from "./components/Faq/faq";
import Herosection from "./components/Herosection/Herosection";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Partners />
      <Timeline />
      {/* <Faq /> */}
    </div>
  );
}

export default App;
