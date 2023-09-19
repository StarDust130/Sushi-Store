import logo from "./../assets/logo.png"
import { Link } from "react-router-dom";
import "../styles/navbar.css"
import ReorderIcon from "@mui/icons-material/Reorder";
import { Button } from "@mui/material";
import { useState } from "react";


function Navbar() {
  const[openLink , setOpenLink] = useState(false)

  const toogleNavbar = () => {
    setOpenLink(!openLink)

  }
  return (
    <div className="navbar" id={openLink ? "open" : "close"}>
      <div className="leftSide">
        <Link to="/">
        <img src={logo} alt="sushi-logo" />
        </Link>
        <div className="hiddenLinks">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Reservation</Link>
        <Button onClick={toogleNavbar}>
          <ReorderIcon />
        </Button>
      </div>
    </div>
  );
}
export default Navbar