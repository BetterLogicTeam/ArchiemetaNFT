// import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import { loadWeb3 } from "../../Api/Api";
import { wireNftContractAddress, wireNftContractAbi } from "../../contracts/contract";
import './Header.css';

function Header() {

  let [btnTxt, setBtTxt] = useState("Connect");
  const [value, setValue] = useState("");
  const [price_bnb, setprice_bnb] = useState();
  const [collection, setCollection] = useState([]);

  const handleChange = (event) => {
    setValue(event.target.value);

    // console.log("value is:", event.target.value);
  };
  const Connect = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc == "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc == "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      let myAcc =
        acc?.substring(0, 4) + "..." + acc?.substring(acc?.length - 4);
      setBtTxt(myAcc);

    }
  }


  useEffect(() => {
    // Connect();
  }, []);


  const [theme, setTheme] = useState("light_theme");
  const [iaDark, setIaDark] = useState(false);



  const toggleTheme = () => {
    if (theme === "dark_theme") {
      setTheme("light_theme")
      setIaDark(!iaDark)

    } else {
      setTheme("dark_theme")
      setIaDark(!iaDark)

    }
  }

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  const handleClose = () => setMenuOpen(false)

  return (

    <div>



      <Navbar collapseOnSelect expand="lg" className='nav_main pt-3' >
        <Container>
          <Navbar.Brand ><Link to="/">
            <img className='nevImg ' src='white.png' width="50%" /></Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Link to="/" className='apna text-white'>
                <Nav.Link className='hxn' href='/'  >
                  Home
                </Nav.Link>
              </Link>
              <Link to="/About_main" className='apna text-white'>
                <Nav.Link className='hxn' href='/About_main' >
                  About Us
                </Nav.Link>
              </Link>
              <Link to="/Collection_main" className='apna text-white'>
                <Nav.Link className='hxn' href='/Collection_main'  >
                  Collection
                </Nav.Link>
              </Link>
              <Link to="/Benifits_main" className='apna text-white'>
                <Nav.Link className='hxn' href='/Benifits_main' >
                  Clubs
                </Nav.Link>
              </Link>
              <Link to="/Income" className='apna text-white'>
                <Nav.Link className='hxn' href='/Income'  >
                  Passive Income
                </Nav.Link>
              </Link>
              <Link to="/Attributes_main" className='apna text-white'>
                <Nav.Link className='hxn' href='/Attributes_main'  >
                  Attributes
                </Nav.Link>
              </Link>
              <Link to="/Roadmap_main" className='apna text-white'>
                <Nav.Link className='hxn' href='/Roadmap_main' >
                  Roadmap
                </Nav.Link>
              </Link>
              <Link to="/Mint_main" className='apna text-white'>
                <Nav.Link className='hxn' href='Mint'  >
                  Mint
                </Nav.Link>
              </Link>
              <Link to="/Mint_main" className="link_text" >
                <Nav.Link className='hxn' href='/Mint_main' >
                  <button className="btn btna_navbar_here" onClick={Connect}>{btnTxt}</button>
                </Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}

export default Header