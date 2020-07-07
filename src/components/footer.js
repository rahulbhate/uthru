import React from "react"
import styles from "./footer.module.scss"
import { useSiteFooterdata} from '../hooks/use-site-footerdata'
import Img from "gatsby-image"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import logo from "../images/uthrulogo_purpleBG.png"
export default function Footer ({location})  {
  const dataIndex = useSiteFooterdata();
  console.log(dataIndex.footer);
    return(
        <div className={styles.footercontainer}>
      <div className={styles.footercolumns}>
        <p className={styles.footercontact}>
          {dataIndex.footer.footerContent[0].titleText}
        </p>
        <p className={styles.footermail}>
          <a href="mailto:hello@uthru.io" className={styles.footermail}>
          {ReactHtmlParser(dataIndex.footer.footerContent[0].mailText)}
          </a>
        </p>
      <p>
          <a href="#" className={styles.scrolltop}>
          {ReactHtmlParser(dataIndex.footer.footerContent[0].backToTopText)}
          </a>
          </p>
      </div>
      <div className={styles.footercolumns}>
        <p className={styles.footerlogo}>
          <img src={logo} width="17%" />
        </p>
        {/* <ul className={styles.footernavigation}>
          <li>
            <a href="/privacy">Privacy</a>
          </li>
          <li>
            <a href="/disclaimer">Disclaimer</a>
          </li>
          <li>© Copyright 2020 U Thru Pty Limited</li>
        </ul> */}
        <div className={styles.footernavigation}>
          {ReactHtmlParser(dataIndex.footer.footerContent[0].footerLinksCopyright)}
        </div>
      </div>
    </div>  
    )
}
