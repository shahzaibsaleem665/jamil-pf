
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Footer from './Components/Footer';
import SocialBar from './Components/SocialBar';
import Header from './Pages/Header';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {


  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Switch>
            <Route path='/projects'>
              <Projects />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
        <SocialBar />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
