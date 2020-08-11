import React, { useState, useEffect } from "react"
import { useCurrentWidth } from "../hooks/use-header-resize"
import {  useScrollHeight } from "../hooks/use-header-scroll"
import ReactHtmlParser from "react-html-parser"
import { Link } from "gatsby"
import Sidebar from "./sidebar"
import { FaArrowDown } from "react-icons/fa"
import styles from "./header.module.scss"
import logo from "../images/uthrulogo_purpleBG.png"
import logoalt from "../images/uthrulogo_pinkBG.png"
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
  const width = useCurrentWidth();
  const isflag = useScrollHeight();
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
                  <h2><img src={logo} alt="U Thru" style={{width: '100px',marginLeft: '15px'}} /></h2>
                    <div className={styles.mainMenu}>
                      { width ? <NavMenu /> : <Sidebar />}
                    </div>
                  </nav>
            ) : <nav className={styles.mainNavNocolor}>
                  <img src={logoalt} alt="U Thru" style={{width: '100px',marginLeft: '15px'}} />
                  </nav>}
        </header>
    </>
  )
}