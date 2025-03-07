
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cart from './components/Cart';
import NotFound from './components/NotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/not-found' element={<NotFound />} />
          <Route path='*' element={<Navigate to='/not-found' />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
