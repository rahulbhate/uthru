import React from "react"
import Header from "../components/header"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useSiteChatdata} from '../hooks/use-site-chatdata'
import styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import RegisterForm from "../components/registerform"
import {
  FaMobile,
  FaClock,
  FaHandPointer
} from "react-icons/fa"
const Chat = ( {location} ) => {
  const dataChat = useSiteChatdata();
  console.log({location},dataChat);
  return(
    <Layout>
      <Header dataIndex={dataChat.chat} navbar={true}/>
      <div className={styles.sectionsContainer}>
      <hr className={styles.special} />
      <div className={styles.section}>
      <h3>{dataChat.chat.midcontent[0].titleText1}</h3>
      </div>
      <div className={styles.section}>
       <p>{dataChat.chat.midcontent[0].titleSubtext1}</p>
      </div>
       </div>
       <section className={styles.howWorks}>
          <hr className={styles.special}/>
         {ReactHtmlParser(dataChat.chat.midcontent[0].bulletedList)}
        </section>
       <section className={styles.homeCards}>
      <div>
        <FaMobile color={"#fba394"} size={48} />
        <h3>{dataChat.chat.midcontent[0].titleText3}</h3>
        <p>
        {dataChat.chat.midcontent[0].titleSubtext3}
        </p>
      </div>
      <div>
        <FaClock size={48} color={"#fba394"} />
        <h3>{dataChat.chat.midcontent[0].titleText4}</h3>
        <p>
        {dataChat.chat.midcontent[0].titleSubtext4}
        </p>
      </div>
      <div>
        <FaHandPointer size={48} color={"#fba394"} />
        <h3>{dataChat.chat.midcontent[0].titleText5}</h3>
        <p>
        {dataChat.chat.midcontent[0].titleSubtext5}
        </p>
      </div>
      <div id="chatForm"></div>
    </section>
       <div className={styles.sectionsContainer}>
       <hr className={styles.special} />
       <div className={styles.section}>
         <h2>{dataChat.chat.midcontent[0].titleText6}</h2>
         </div>
         <div className={styles.section}>
       <p>{dataChat.chat.midcontent[0].titleSubtext6}</p></div>
       </div>
       <div className={styles.sectionsContainer}>
        <div className={styles.detailsArea}>
        <div className={styles.section}>
          <RegisterForm />
      </div>
      </div>
      </div>
    </Layout>
  )
}
export default Chat