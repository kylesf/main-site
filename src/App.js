import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import {Routes, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [navToggle, setnavToggle] = useState(true)

  const navClick = () => {
    setnavToggle(!navToggle)
  }

  const navOffClick = () => {
    setnavToggle(false)
  }

  return (
    <div className="App">
      {/* <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
      <NavBar navToggle={setnavToggle}/>
      </div>
      <div className="nav-button" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div> */}
      <div className="main-content" onClick={navOffClick}>
        <div className="content">
          <Routes>
            <Route path='/' element={<HomePage />}/>
            {/* <Route path='/about' element={<AboutPage />}/>
            <Route path='/portfolio' element={<PortfolioPage />}/>
            <Route path='/blog' element={<BlogPage />}/> */}
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
