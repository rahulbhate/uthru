import React from "react"
import styles from "./layout.module.scss"
import Footer from "./footer.js"
export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.content}>{children}</div>
    <Footer />
   </div>
)
