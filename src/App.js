
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Footer from './Components/Footer';
import SocialBar from './Components/SocialBar';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Publicaitons from './Pages/Publications';

import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Research from './Pages/Research';
import Contact from './Pages/Contact';
import About from './Pages/About';

function App() {


  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Switch>
            <Route path='/publications'>
             <Publicaitons />
             <SocialBar />
            </Route>
            <Route path='/research-work'>
            <Research />
            <SocialBar />
            </Route>
            <Route path='/contact-me'>
            <Contact />
            </Route>
            <Route path='/about-me'>
            <About />
            <SocialBar />
            </Route>
            <Route path='/'>
              <Home />
              <SocialBar />
            </Route>
            
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
