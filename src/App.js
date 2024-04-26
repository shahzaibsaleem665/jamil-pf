
import './App.css';
import Footer from './Components/Footer';
import SocialBar from './Components/SocialBar';
import Header from './Pages/Header';
import Home from './Pages/Home';

function App() {
  return (
    <div className="app">
      <Header />
      <Home />
      <SocialBar />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
