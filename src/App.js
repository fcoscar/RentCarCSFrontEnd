import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CarPage from './Pages/CarPage'
import Header from './Components/Header'

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path='/car/:carId' element={<CarPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
