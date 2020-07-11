import React from "react"
import Header from "../components/header"
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { useSiteChatdata} from '../hooks/use-site-chatdata'
import styles from "./index.module.scss"
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
      <div className={styles.sectionFive}>
      <hr className={styles.special} />
      <h2>{dataChat.chat.midcontent[0].titleText1}</h2>
       <p>{dataChat.chat.midcontent[0].titleSubtext1}</p></div>
       <section className={styles.howWorks}>
       <hr className={styles.rounded}/>
       {ReactHtmlParser(dataChat.chat.midcontent[0].bulletedList)}
         </section>
       <section className={styles.sectionColumns}>
      <div>
        <span>
        <FaMobile color={"#fba394"} size={48} />
        </span>
        <h2>{dataChat.chat.midcontent[0].titleText3}</h2>
        <p>
        {dataChat.chat.midcontent[0].titleSubtext3}
        </p>
      </div>
      <div>
        <span>
        <FaClock size={48} color={"#fba394"} />
        </span>
        <h2>{dataChat.chat.midcontent[0].titleText4}</h2>
        <p>
        {dataChat.chat.midcontent[0].titleSubtext4}
        </p>
      </div>
      <div>
        <span>
        <FaHandPointer size={48} color={"#fba394"} />
        </span>
        <h2>{dataChat.chat.midcontent[0].titleText5}</h2>
        <p>
        {dataChat.chat.midcontent[0].titleSubtext5}
        </p>
      </div>
      <div id="chatForm"></div>
    </section>
       <div className={styles.sectionFive}>
       <hr className={styles.special} />
         <h2>{dataChat.chat.midcontent[0].titleText6}</h2>
       <p>{dataChat.chat.midcontent[0].titleSubtext6}</p></div>
        <div className={styles.detailsArea}>
          <RegisterForm />
      </div>
    </Layout>
  )
}
export default Chat