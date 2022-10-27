// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Home />
    </HashRouter>
  );
}

export default App;
