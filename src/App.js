import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Bring from './Components/Bring/Bring';
import Carde from './Components/Carde/Carde';
import Sell from './Components/Sell/Sell';
import Footer from './Components/Footer/Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  BrowserRouter,
} from "react-router-dom";

import Index_main from './Components/Index_main';
import Collection_main from './Components/Collection_main';
import Mint_main from './Components/Mint_main'
import About_main from './Components/About_main';
import Benifits_main from './Components/Benifits_main';
import Attributes_main from './Components/Attributes_main';
import Roadmap_main from './Components/Roadmap_main';
import Income from './Components/Income/Income';
import Income_main from './Components/Income_main';

function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Header />
      <Routes>
      <Route exact path="/" element={<Index_main />} />
      <Route exact path="/About_main" element={<About_main/>} />

      <Route exact path="/Collection_main" element={<Collection_main />} />
      <Route exact path="/Benifits_main" element={<Benifits_main />} />
      <Route exact path="/Attributes_main" element={<Attributes_main />} />
      <Route exact path="/Roadmap_main" element={<Roadmap_main />} />
      <Route exact path="/Mint_main" element={<Mint_main />} />
      <Route exact path="/Income" element={<Income_main />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    {/* <Header />
     <Hero />
     <About />
     <Bring />
     <Carde />
     <Sell />
     <Footer /> */}
    </div>
  );
}

export default App;
