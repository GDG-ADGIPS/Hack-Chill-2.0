import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Tracks from "./components/Tracks/Tracks";
import Partners from "./components/Partners/Partners";
import Faq from "./components/Faq/faq";
import Herosection from "./components/Herosection/Herosection";
import About from "./components/About/About";
import Timeline from "./components/Timeline/Timeline";
import Prizes from "./components/Prizes/Prizes";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <About />
      <Tracks />
      <Timeline />
      <Partners />
      {/* <Prizes /> */}
      <Footer/>
    </div>
  );
}

export default App;
