import React, {useEffect} from "react"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
const NavMenu2 = props => (
  <>
    <HeaderLink to="/" text="Home" />
    <HeaderLink to="/agents" text="Agents" />
    <HeaderLink to="/buyersrenters" text="Buyers/Renters" />
  </>
)
export default function Header ({location,dataIndex, navbar})  {
  /**
   * Oftentimes we'll have different UI state
   * based on the router location.  Do it here.
   */
  useEffect(() => console.log(location), [location]);
  console.log(dataIndex);

  return (
<div className={styles.banner}>
        <div className={styles.overlay}></div>
        <header className={styles.container}>
          <div className={styles.row}>
              <div className={styles.logo}>
                <a href="/"><Img fluid={dataIndex.header[0].logo.fluid} imgStyle={{width: '25%',
    height: '25%'}}/></a>
              </div>
              {navbar ? <NavMenu2 style={{ backgroundColor:'red', height: '100px'}}/> : null }
          </div>
          <div className={styles.headerSectionContents}>
            <h2 className={styles.subtitle}>
              { ReactHtmlParser (dataIndex.header[0].titleText)} 
            </h2>
            <p className={styles.contents}>
            {dataIndex.header[0].titleSubtext}
            </p>
            <Link className={styles.links} to="/agents"><button className={styles.btnprimary}>{ReactHtmlParser(dataIndex.header[0].buttonsLinks)}</button></Link>
          </div>
        </header>
      </div>
  )
}