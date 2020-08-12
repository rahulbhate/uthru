import React, {useState, useEffect} from 'react';
import styles from "./header.module.scss"
import { RiArrowUpSLine } from "react-icons/ri";
const ScrollToTop = () =>{
    return( 
      <>
      <p className={styles.scrollTop}><RiArrowUpSLine size={42} onClick={e =>window.scroll({top: 0, left: 0, behavior: 'smooth' })}/></p>
      </>
    )
}

export default ScrollToTop
