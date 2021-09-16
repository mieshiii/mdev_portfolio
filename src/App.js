import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import {useState} from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="App">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Landing/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
