import react from 'react'
import './App.css'

import { Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar/Navbar.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Home from "./components/Home/Home.jsx"
import Search from "./components/Search/Search.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Error from "./components/Error/Error.jsx"
import Thank from "./components/Thank/Thank.jsx"

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/search" Component={Search}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/thanks" Component={Thank}></Route>
        <Route path="*" Component={Error}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
