
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter as Router
import './App.css';
import Footer from './Components/Footer';
import SocialBar from './Components/SocialBar';
import Header from './Pages/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="app">
       <Router>
        <div>
      <Header />
      <Home />
      <SocialBar />
      <Footer />
      </div>
      </Router>
      
    </div>
  );
}

export default App;
