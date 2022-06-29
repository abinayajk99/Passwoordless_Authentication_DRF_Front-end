import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import HomeProduct from './components/HomeProduct';
import Login from './components/Login';
import NavBar from './components/NavBar/NavBar';
import MagicLink from './components/MagicLink';

function App() {
  return (
    <div className="App">
      <Router>
      <NavBar/>
        <Routes>
          {/* <Route path="/" element={<HomeProduct />}></Route> */}
          <Route path="/" element={<Login/>}></Route>
          <Route path="/magiclink/:token/:email" element={<MagicLink/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
