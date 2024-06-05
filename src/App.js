import './App.css';
import Navbar from './compontes/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './compontes/Home';
import About from './compontes/About';
import NoteState from './context/notes/NoteState';
import Alert from './compontes/Alert';
import Login from './compontes/Login';
import Signup from './compontes/Signup';


function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert  message="Hello react"/>
      <div className="container">
      <Routes>
        <Route exact path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />

      </Routes>
      </div>
    </Router>
    </NoteState> 
    </>    
  );
}

export default App;
