import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AllPlayers from './components/AllPlayers'
import SinglePlayer from './components/SinglePlayer'
import {Routes, Route} from 'react-router-dom'
import SearchBar from './components/SearchBar'
import NewPlayerForm from './components/NewPlayerForm'

function App() {

  return (
    <>
      <AllPlayers />
      <div id="main-section">
        <Routes>
      
          <Route path='/player/:name' element={<SearchBar />} />
          <Route path='/' element={<div><AllPlayers /> <NewPlayerForm />   </div>} />

        </Routes>
      </div>
      <div>

      </div >
    </>
  )
}

export default App
