import React, { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import LogoPage from "./components/LogoPage";
import Updates from "./components/Updates";

// import Events from "./components/Events";
import World from "./components/World";
import Races from "./components/Races";
import Classes from "./components/Classes";
import Kickstarter from "./components/Kickstarter";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
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
        <Races></Races>
      </div>
    </div>
  );
}

export default App;
