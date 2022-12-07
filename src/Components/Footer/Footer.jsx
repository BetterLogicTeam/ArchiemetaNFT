import React from "react";
import { BsFacebook } from "react-icons/bs";
import { IoLogoTwitter } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer_main">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Link to="/"><div className="footer_emg">
                <img src="V4.png" alt="" className="max-h-7 mb-4" />
              </div></Link>
              <div className="footer_p text-white">
                <p>
                  Create, sell and collect truly rare digital artworks. Powered
                  by blockchain technology.
                </p>
              </div>
              <div className="footer_icon space-x-5">
                <a href="">
                  <BsFacebook></BsFacebook>
                </a>
                <a href="">
                  <IoLogoTwitter></IoLogoTwitter>
                </a>
                <a href="">
                  <BsInstagram></BsInstagram>
                </a>
              </div>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-6">
              <h6 className="text-white use">USEFUL LINK</h6>
              <ul className="footer_list">
                <Link to="/">
                  {" "}
                  <li className="llii">Home</li>
                </Link>
                <Link to="/About_main">
                  {" "}
                  <li className="llii">About us</li>
                </Link>
                <Link to="/Collection_main">
                  <li className="llii">Collection</li>
                </Link>
                <Link to="/Benifits_main">
                  <li className="llii">Benifits</li>
                </Link>
                <Link to="/Attributes_main">
                  <li className="llii">Attributes</li>
                </Link>
                <Link to="/Roadmap_main">
                  <li className="llii">Roadmap</li>
                </Link>
                <Link to="/Mint_main">
                  <li className="llii">Mint</li>
                </Link>
              </ul>
            </div>
          </div>




          <div class="flex flex-col items-center grey justify-between space-y-2 py-8 sm:flex-row sm:space-y-0">
            <span class="dark:text-jacarta-400 text-sm">
              ©<script>document.write(new Date().getFullYear())</script>2022
              <a href="https://www.archieneko.com/" class="hover:text-accent">
              WWW.ARCHIENEKO.COM
              </a>
            </span>
            <ul class="dark:text-jacarta-400 flex flex-wrap space-x-4 text-sm">
              <li>
                <a href="#" class="hover:text-accent">
                  Terms and conditions
                </a>
              </li>
              <li>
                <a href="#" class="hover:text-accent">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

     
    </div>
  );
}

export default Footer;
