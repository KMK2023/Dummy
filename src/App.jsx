// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'

//Intropage
import Greeting from '../Components/Greeting'

// Select the country and type you are looking for 
import CountrySelection from '../Components/CountrySelection'
import CurrencyConverter from '../Components/CurrencyConverter'

//Last line of the page
import Contactus from '../Components/Contactus'
import Landscapes from '../Components/Landscapes'


// Below to include Emoji for the country
import Emoji from './components/Emoji'
import { EmojiProvider } from './context/EmojiContext'

// Import routes to route to the correct page
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <>
    
    <Routes>
        <Route index element={<Greeting />} />
        <Route path="country" element={<CountrySelection />} />
        <Route path="converter" element={<CurrencyConverter />} />
        <Route path="contactus" element={<Contactus />} />
        <Route path="landscapes" element={<Landscapes />} />
    </Routes>
    

  {/* Header */}
    <Greeting/>
    <CountrySelection/>
    <CurrencyConverter/>
    <Landscapes/>
    <Contactus/>

    {/* <EmojiContext/> */}
  

  {/* Emoji Provider wraps the emoji and the landascapes so that emoji can be used in all of these */}
      <EmojiProvider>
      <Emoji/>
      </EmojiProvider>


  {/* Footer */}
    

   

    </>
  )

}

export default App
