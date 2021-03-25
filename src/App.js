import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import PortfolioPage from './Pages/PortfolioPage';
import BlogPage from './Pages/BlogPage';
import ContactPage from './Pages/ContactPage';
import {Switch, Route} from 'react-router-dom';
import {useState} from 'react';

function App() {

  const [navToggle, setnavToggle] = useState(false)

  const navClick = () => {
    setnavToggle(!navToggle)
  }

  const navOffClick = () => {
    setnavToggle(false)
  }

  return (
    <div className="App">
      <div className={`sidebar ${navToggle ? 'nav-toggle' : ''}`}>
      <NavBar />
      </div>
      <div className="nav-button" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>
      <div className="main-content" onClick={navOffClick}>
        <div className="content">
          <Switch>
            <Route path='/' exact>
                <HomePage />
            </Route>
            <Route path='/about' exact>
                <AboutPage />
            </Route>
            <Route path='/portfolio' exact>
                <PortfolioPage />
            </Route>
            <Route path='/blog' exact>
                <BlogPage />
            </Route>
            <Route path='/contact' exact>
                <ContactPage />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  )
}

export default App
