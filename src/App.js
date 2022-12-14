
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbarr from './components/Navbar/Navbarr';
import Home from './routes/homepage/Home';
import About from './routes/about/About';
import Service from './routes/service/Service';
import Contact from './routes/contact/Contact';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Navbarr/>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />        
          <Route path="/contact" element={<Contact />} />
       
         
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
