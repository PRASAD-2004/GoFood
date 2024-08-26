import './App.css';
import Home from './Screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Login from './Screens/Login';
import Signup from './Screens/Signup';

function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path='/signup' element={<Signup/>}/>
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
