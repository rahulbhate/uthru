import React, {useState, useEffect} from 'react';
import '../styles/_menu.scss';
import styles from "./header.module.scss"
import { Link } from "gatsby"
import { GiHamburgerMenu } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
const Sidebar = () =>{
    const [open,setOpen] = useState(true);
    const listenClickEvent = event => {
    setOpen(!open);
    }
    return( 
      <>
        <div className="menu-btn"><span className={open ? "menu-btn__burger" : "menu-btn__burger open"} onClick={listenClickEvent}> </span><div className={open ? "menu-nav__open": "menu-nav"}><NavMenu /></div></div>
      </>
         
    )
}
  const NavMenu = props => {
    return (
    <>
     <Link to="/" style={{color: 'white'}}>Home</Link>
     <Link to="/agents" style={{color: 'white'}}>Agents</Link>
     <Link to="/buyersrenters" style={{color: 'white'}}>Buyers/Renters</Link>
    </>
    )
  }
export default Sidebar
