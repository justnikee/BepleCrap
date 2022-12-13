import Header from "./components/Header.components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Header.components/Homepage.components/HomePage";
import WorkPage from "./components/Header.components/WorkPage.jsx/WorkPage";
import ContactUs from "./components/Header.components/contactus.component/ContactUs";
import Lenis from "@studio-freight/lenis";

function App() {
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: "vertical",
    gestureDirection: "vertical",
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });

  lenis.on("scroll", ({ scroll, limit, velocity, direction, progress }) => {
    console.log({ scroll, limit, velocity, direction, progress });
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <Router>
      <div className="app py-[70px]">
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
