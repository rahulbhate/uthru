import React from "react"
import styles from "./footer.module.scss"
import { useSiteFooterdata } from "../hooks/use-site-footerdata"
import ReactHtmlParser from "react-html-parser"
import logo from "../images/uthrulogo_purpleBG.png"
export default function Footer() {
  const dataIndex = useSiteFooterdata()
  return (
    <footer className={styles.footer}>
      <section>
        <p className={styles.footercontact}>
          {dataIndex.footer.footerContent[0].titleText}
        </p>
        <a href="mailto:hello@uthru.io" className={styles.footermail}>
          {ReactHtmlParser(dataIndex.footer.footerContent[0].mailText)}
        </a>
        <a href="#" className={styles.scrolltop}>
          {ReactHtmlParser(dataIndex.footer.footerContent[0].backToTopText)}
        </a>
      </section>
      <section>
        <h2>
          <img src={logo} alt="Logo" width="110px" />
        </h2>
        <section className={styles.footernavigation}>
          {ReactHtmlParser(
            dataIndex.footer.footerContent[0].footerLinksCopyright
          )}
        </section>
      </section>
    </footer>
  )
}
