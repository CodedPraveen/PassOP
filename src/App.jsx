import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="min-h-[83vh]">
        <div className="absolute top-0 -z-10 h-full w-full bg-green-50">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(255,255,255,0.5)] opacity-50 blur-[80px]">
          </div>
        </div>

        <Manager />
      </div >
      <Footer />
    </>
  )
}

export default App
