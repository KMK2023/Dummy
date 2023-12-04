import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Greeting from "./Components/Greeting";
import CountrySelection from "./Components/CountrySelection";
import CurrencyConverter from "./Components/CurrencyConverter";
import Gallery from "./Components/Gallery";
import Contactus from "./Components/Contactus";
import LoginForm from "./Components/LoginForm";
import VideoPlayer from "./Components/VideoPlayer";
import SignupForm from "./Components/SignupForm";
import CalendarComponent from "./Components/Calendar";
import Cardslots from "./Components/Cardslots";
import Slider from "./Components/Slider"; // Import the Slider component
import NavBar from "./Components/NavBar";
// import PeopleForm from "./Components/PeopleForm"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route index element={<Greeting />} />
        <Route path="country" element={<CountrySelection />} />
        <Route path="currency" element={
            <>
              <CurrencyConverter />
              <Slider />
            </>
          }
        />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="Gallery"element={<Gallery/>} />
        <Route path="Cardslots"element={<Cardslots />} />      
        <Route path="contact" element={<Contactus />} />
        {/* Add the route for the Slider component */}
      </Routes>
    </>
  );
}

export default App;
