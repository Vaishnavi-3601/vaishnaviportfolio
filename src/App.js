import './App.css';
import About from './views/About';
import Home from './views/Home';
import Mynavbar from './views/Mynavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './views/Skills';
import Projects from './views/Projects';
import Contact from './views/Contact';


function App() {
  return (
    <div>
      <Mynavbar />
      <Home />
      <About />
      <Projects />
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
