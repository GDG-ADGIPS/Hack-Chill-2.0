import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tracks from "./components/Tracks/Tracks";
import Partners from "./components/Partners/Partners";
import Faq from "./components/Faq/faq";
import Herosection from "./components/Herosection/Herosection";
import About from "./components/About/About";
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Tracks />
      <Partners />
      <Faq />
    </div>
  );
}

export default App;
