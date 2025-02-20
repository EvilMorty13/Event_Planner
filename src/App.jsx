import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
