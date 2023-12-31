import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import CarPage from './Pages/CarPage'
import Header from './Components/Header'
import LoginPage from "./Pages/LoginPage";
import CreateUserPage from "./Pages/CreateUserPage";

function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage/>} exact/>
          <Route path='/car/:carId' element={<CarPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/user/create' element={<CreateUserPage/>}/>
        </Routes>
      </Router>
  );
}

export default App;
