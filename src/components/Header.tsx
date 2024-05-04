import React from "react";
import Logo from "../logo.png";
import { Link } from "react-router-dom";

function Header(): JSX.Element {
  return (
    <>
      <header>
        <div className="leftH">
         <a href="localhost:3000"> <img src={Logo} alt="logo" className="logo" /></a>
          <Link to="/" className="link">
            <div className="headerItem">Swap & Bridge </div>
          </Link>
          <Link to="/buy" className="link">
            <div className="headerItem">Trading Perps</div>
          </Link>
          <Link to="/buy" className="link">
            <div className="headerItem">Buy Crypto</div>
          </Link>
        </div>
        <div className="rightH"></div>
      </header>
    </>
  );
}

export default Header;
