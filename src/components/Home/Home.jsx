import react from 'react'

import "./Home.css"

import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className="wrapper">
        <div className="left">
          <div className="space">
            <h1>Welcome to MyDictionary</h1>
            <h1>Your Ultimate Language Reference</h1>
          </div>
          <div className="space">
                      <p>Explore a vast collection of words, meanings, and phonetics. Enhance your vocabulary and language skills</p>
                      <p>Start your journey with MyDictionary today!</p>
          </div>
          <div className="space">
            <NavLink to="/search">Explore</NavLink>
          </div>
        </div>
        <div className="right">
          <img src="/dictionary.jpg" alt="dict-image" />
        </div>
      </div>
    </>
  )
}

export default Home;