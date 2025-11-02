import { useState } from 'react'
import Header from './header.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Header />

    
      <Routes>
<Route to ="/" element ={<Home />}/>
<Route to ="/about" element ={<About />}/>
<Route to ="/contact" element ={<Contact />}/>
</Routes>
    </>
  )
}

export default App
