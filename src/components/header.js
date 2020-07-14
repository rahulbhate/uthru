import React, {useState, useEffect} from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import win, { window } from 'global/window'
import { FaArrowDown } from "react-icons/fa"
import styles from "./header.module.scss"
import logo from "../images/uthrulogo_pinkBG.png"

const HeaderLink = props => {
  const activeStyle = {
    color: "#e5a191",
    fontWeight: "bold",
    textDecoration: "underline",
  }
  return (
    <Link className={styles.link} to={props.to} activeStyle={activeStyle}>
      {props.text}
    </Link>
  )
}

const NavMenu = (props) => {
  return(
  <>
    <HeaderLink to="/" text="Home" />
    <HeaderLink to="/agents" text="Agents" />
    <HeaderLink to="/buyersrenters" text="Buyers/Renters" />
  </>
  )
}
export default function Header ({dataIndex, navbar})  {
  var url
  if(typeof window !== undefined){
    console.log("Windowwwwwåßßßßß");
      url = global.window.location.pathname
  }
  
  const [isflag, setflag] = useState();
  const listenScrollEvent = event => {
    if (window.scrollY < 100) {
       setflag(false);
       console.log(window.scrollY, isflag);
    } else if (window.scrollY > 100) {
       setflag(true)
       console.log(window.scrollY, isflag);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);
  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  // useEffect(() => console.log(location), [location]);
  // console.log(dataIndex);

  return (
<div className={styles.banner}>
  {navbar ? <div className={styles.overlayalternate}></div> : <div className={styles.overlay}></div>}
        <header className={styles.container}>
          <nav className={isflag ? styles.rowbg : styles.row}>
              <div className={styles.logo}>
                <a href="/"><Img fluid={dataIndex.header[0].logo.fluid} imgStyle={{width: '25%',
    height: '25%' , zIndex: 30}}/></a>
              </div>
                {navbar ?  <div className={styles.header}> <NavMenu /></div> : null }
          </nav>
          
          <div className={navbar ?  styles.headerSectionContentsAlternate : styles.headerSectionContents }>
            {navbar ?  <h2 className={styles.subtitlealt}>
              { ReactHtmlParser (dataIndex.header[0].titleText)} 
            </h2> :  <h2 className={styles.subtitle}>
              { ReactHtmlParser (dataIndex.header[0].titleText)} 
            </h2>}
            <p className={styles.contents}>
            {dataIndex.header[0].titleSubtext}
            </p>
            {navbar ? 
              <>
              <Link className={styles.links}  to={url+ '#chatForm'}><button className={styles.btnprimary}>{ReactHtmlParser(dataIndex.header[0].buttonsLinks)}</button></Link>
              {/* <FaArrowDown size={48} className={styles.bounce} /> */}
              </>
            :
            <>
            <Link className={styles.links} to="/agents"><button className={styles.btnprimary}>I 'm an agent</button></Link>
            <Link className={styles.links} to="/buyersrenters"><button className={styles.btnprimary}>I 'm a buyer/renter</button></Link>
            </>  
           
            }
            
          </div>
        </header>
      </div>
  )
}