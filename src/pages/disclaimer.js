import React from "react"
import { graphql } from "gatsby"
import styles from "./index.module.scss"
import Layout from "../components/layout"
import {
  FaMobile,
  FaClock,
  FaHandPointer,
} from "react-icons/fa"

const Disclaimer = ({ data: { disclaimer } }) => (
  <>
  <Layout>
    <section className={styles.howWorks}>
      <div id="about">
        <hr className={styles.rounded} />
        <h2>Website Disclaimer</h2>
      </div>
      <p>
      All care is taken in the preparation of the information and published materials on this site. U THRU PTY LTD does not make any representations or give any warranties about its accuracy, reliability, completeness or suitability for any particular purpose. To the extent permissible by law, U THRU PTY LTD will not be liable for any expenses, losses, damages (including indirect or consequential damages) or costs which might be incurred as a result of the information being inaccurate or incomplete in any way and for any reason.
      </p>
      <p>
      This site may contain hypertext links, frames or other references to other parties and their websites. U THRU PTY LTD cannot control the contents of those other sites, and make no warranty about the accuracy, timeliness or subject matter of the material located on those sites. U THRU PTY LTD do not necessarily approve of, endorse, or sponsor any content or material on such sites. U THRU PTY LTD make no warranties or representations that material on other websites to which this website is linked does not infringe the intellectual property rights of any person anywhere in the world.
      </p>
      <p>
      If you have any concerns regarding the content of the Website, please contact U THRU PTY LTD.

      </p>
    </section>
    <section className={styles.sectionColumns}>
      <div>
        <span>
          <FaMobile size={48} color={"#fba394"} />
        </span>
        <h2>Safe</h2>
        <p>
          Sign up easily and unlock a world of agent-free vacant property
          inspections.
        </p>
      </div>
      <div>
        <span>
          <FaClock size={48} color={"#fba394"} />
        </span>

        <h2>Efficient</h2>
        <p>
          Instantly schedule independent inspections at times that work for you.
        </p>
      </div>
      <div>
        <span>
          <FaHandPointer color={"#fba394"} size={48} />
        </span>
        <h2>Convenient</h2>
        <p>
          Gives you and your loved ones private access to each property, keeping
          everyone safe.
        </p>
      </div>
    </section>
  </Layout>
  </>
)

export default Disclaimer

export const query = graphql`
  query DisclaimerQuery {
    disclaimer: datoCmsDisclaimerPage {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      subtitle
      contents
    }
  }
`