import React from "react";
import "./App.css";

import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
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
        {/* <Projects></Projects> */}
        <Projects2></Projects2>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
