import React, { useState, useEffect } from "react"

import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser"
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Sidebar from "./sidebar"
import { FaArrowDown } from "react-icons/fa"
import styles from "./header.module.scss"
import logo from "../images/uthrulogo_purpleBG.png"
import logoalt from "../images/uthrulogo_pinkBG.png"
import photo from "../images/kitchen-female.png"
const HeaderLink = props => {
  const activeStyle = {
    color: "#e5a191",
    fontWeight: "bold",
    borderBottom: "2px solid #e5a190"
  }
  return (
    <Link className={styles.link} to={props.to} activeStyle={activeStyle}>
      {props.text}
    </Link>
  )
}

const NavMenu = props => {
  return (
    <>
      <HeaderLink to="/" text="Home" />
      <HeaderLink to="/agents" text="Agents" />
      <HeaderLink to="/buyersrenters" text="Buyers/Renters" />
    </>
  )
}
export default function Header({ dataIndex, navbar }) {
  const [open,setOpen] = useState(true);
  const [isflag, setflag] = useState();
 
  const listenScrollEvent = event => {
    if (window.scrollY < 100) {
      setflag(false)
      console.log(window.scrollY, isflag)
    } else if (window.scrollY > 100) {
      setflag(true)
      console.log(window.scrollY, isflag)
    }
  }
  const listenClickEvent = event => {
    setOpen(!open);
    console.log(open);
    }
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)
    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  return (
    <>
        {navbar ? (
          <div className={styles.overlayalternate}></div>
        ) : (
          <div className={styles.overlay}></div>
        )}
        <header className={navbar ? styles.showcase : styles.showcaseAlternate}>
            {navbar ? (
              <>
              <img src={logo} alt="U Thru" style={{width: '110px', zIndex:10}} />
              <h1>{ReactHtmlParser(dataIndex.header[0].titleText)}</h1>
              <p>{dataIndex.header[0].titleSubtext}</p>
                  <a className={styles.links} href="#chatForm">
                    <button className={styles.btnprimary}>
                      {ReactHtmlParser(dataIndex.header[0].buttonsLinks)}
                    </button>
                  </a>
                <div>
                  <FaArrowDown size={48} className={styles.bounce} />
                </div>
              </>
            ) : (
              <>
                <h1>{ReactHtmlParser(dataIndex.header[0].titleText)}</h1>
                <p> {dataIndex.header[0].titleSubtext}</p>
                <div>
                <Link className={styles.links} to="/agents">
                  <button className={styles.btnprimary}>I 'm an agent</button>
                </Link>
                <Link className={styles.links} to="/buyersrenters">
                  <button className={styles.btnprimary}>
                    I 'm a buyer/renter
                  </button>
                </Link>
                </div>
              </>
            )}
                {navbar ? (
                  <nav className={isflag ?  styles.mainNavAlternateColor : styles.mainNav}>
                  <img src={logo} alt="U Thru" style={{width: '100px',marginLeft: '15px'}} />
                    <div className={styles.mainMenu}>
                      <NavMenu />
                      {/* <Sidebar /> */}
                    </div>
                  </nav>
            ) : <nav className={styles.mainNavNocolor}>
                  <img src={logoalt} alt="U Thru" style={{width: '100px',marginLeft: '15px'}} />
                  </nav>}
        </header>
    </>
  )
}
