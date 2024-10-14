import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { NewCourses } from './components/NewCourses'
import { ExistingCourses } from './components/ExistingCourses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <NewCourses/>
      <ExistingCourses/>
    </>
  )
}

export default App
