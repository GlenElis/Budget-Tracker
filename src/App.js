import { BrowserRouter as Router,
  Routes,
  Route,
  Link
 } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Resources from './Pages/Resources';
import ErrorPage from './Pages/ErrorPage';
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/resources"> Resources </Link>
      </nav><br/><br/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
   

    
  );
}

export default App;