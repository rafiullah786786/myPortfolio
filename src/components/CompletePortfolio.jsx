import Navbar from "./Navbar/Navbar";
import Intro from "./Intro/Intro";
import Services from "./Services/Services";
import "./CompletePortfolio.css";
import Experience from "./Experience/Experience";
import Works from "./Works/Works";
import Portfolio from "./Portfolio/Portfolio";
import Testimonial from "./Testimonials/Testimonial";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../Context";
function CompletePortfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App container-fluid "
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="row">
        <div className="col-sm-12">
          <Navbar />
          <Intro />
          <Services />
          <Experience />
          <Works />
          <Portfolio />

          <Contact />
        </div>
      </div>
    </div>
  );
}

export default CompletePortfolio;
