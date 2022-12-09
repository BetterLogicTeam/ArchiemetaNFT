// import logo from './logo.svg';
// import './App.css';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import About from './About/About';
import Bring from './Bring/Bring';
import Carde from './Carde/Carde';
import Sell from './Sell/Sell';
import Footer from './Footer/Footer';
import Income from './Income/Income';


export default function Index_main() {
  return (
    <div className="App">
     <Hero />
     <About />
     <Carde />
     <Bring />
     <Income />
     <Sell />
    </div>
  );
}

