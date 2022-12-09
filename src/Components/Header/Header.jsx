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
      const web3 = window.web3;
      let wire_contract_instance = new web3.eth.Contract(
        wireNftContractAbi,
        wireNftContractAddress
      );
    }
  }
    

    useEffect(() => {
      Connect();
    }, []);


    const [theme, setTheme] = useState("light_theme");
    const [iaDark, setIaDark] = useState(false);



    const toggleTheme = () => {
      if (theme === "dark_theme") {
        setTheme("light_theme")
        setIaDark(!iaDark)
        
      }else{
        setTheme("dark_theme")
        setIaDark(!iaDark)

      }
    }

    useEffect(() => {
      document.body.className = theme;
    }, [theme])
  
  return (

    <div>
        <Navbar className='nav_main' collapseOnSelect expand="lg" >
      <Container>
        <Navbar.Brand href="#home"><Link to="/"><img className='nev' src='white.png'></img></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className='alna'>
            <Nav.Link className='hxn' href="#Home">
             <Link to="/" className='apna'>Home</Link> 
              </Nav.Link>
              <Nav.Link className='hxn' href="#Mint">
            <Link to="/About_main" className='apna'>About Us</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Collection">
              <Link to="/Collection_main" className='apna'>Collection</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Benifits">
            <Link to="/Benifits_main" className='apna'>Clubs</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Benifits">
            <Link to="/Income" className='apna'>Income</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Attributes">
            <Link to="/Attributes_main" className='apna'>Attributes</Link>
            </Nav.Link>
            <Nav.Link className='hxn' href="#Roadmap">
            <Link to="/Roadmap_main" className='apna'>Roadmap</Link>
            </Nav.Link>
            
            <Nav.Link className='hxn' href="#Mint">
            <Link to="/Mint_main" className='apna'>Mint</Link>
            </Nav.Link>

            <Nav.Link className='hxn' href="">
            <Link to="/Mint_main" className="link_text" ><button className="btn btna_navbar_here">{btnTxt}</button></Link>
            </Nav.Link>

            {/* <a href="#" className='btn tggl' onClick={() => toggleTheme()}>
           {iaDark?<><span className="fs-4" >☀</span></>:<><span className="fs-4">☾</span></>}    
            </a> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </div>
  )
}

export default Header