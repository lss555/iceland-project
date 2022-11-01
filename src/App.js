// import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar/navbar.js';
import Home from './components/home/home.js';
import Gallery from './components/gallery/gallery.js';
import About from './components/about/about.js';
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <Home />
      <Gallery />
      <About />
    </HashRouter>
  );
}

export default App;
