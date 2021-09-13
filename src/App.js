import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Navbar/>
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
