import Header from "./components/Header.components/Header";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/Header.components/Homepage.components/HomePage";
import WorkPage from "./components/Header.components/WorkPage.jsx/WorkPage";
import ContactUs from "./components/Header.components/contactus.component/ContactUs";

function App() {
  return (
    <Router>
      <div className="app">
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
