import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import Portfolio from './pages/Portfolio';


function App() {
  return (
    <div  className="App">
        <Router>
          <div className='nav'>
            <Navbar />
          </div>
          <div className='main-body'>
              <div className='main'>
                <Routes>
                  <Route path='/' exact element={<Home />} />
                  <Route path='/portfolio'  element={<Portfolio />} />
                  <Route path='/project/:id' element={<ProjectDisplay />} />
                  <Route path='/contact'  element={<Contact />} />
                </Routes>
              </div>
            <div className='footer'>
              <Footer />
            </div>
          </div>
        </Router>
    </div>
  );
}

export default App;
