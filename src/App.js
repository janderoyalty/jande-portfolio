import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Skills from "./components/Skills";
import Projects2 from "./components/Projects2";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Landing from "./components/Landing";

function App() {
  // const [showModal, setShowModal] = useState(false);

  // const handleCloseModal = () => setShowModal(false);
  // const handleShowModal = () => setShowModal(true);

  return (
    <div className="App">
      <div id="bg"></div>
      <div id="app-content">
        <Navigation></Navigation>
        <Landing></Landing>
        {/* PINK WAVE TOP */}
        <div class="custom-shape-divider-bottom-1710142400">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
        <Projects2></Projects2>
        <Skills></Skills>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
