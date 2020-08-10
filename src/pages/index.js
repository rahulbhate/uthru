import React from "react"
import { graphql } from "gatsby"
import { useSiteIndexdata} from '../hooks/use-site-indexdata'
import Header from "../components/header"
import styles from "./index.module.scss"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

const Index = ({location}) => {
  const dataIndex = useSiteIndexdata();
  console.log(dataIndex);
  console.log({location});
  return(
    <>
    <Helmet>
          <meta charSet="utf-8" />
          <meta http-equiv="ScreenOrientation" content="autoRotate:disabled"></meta>
          <title>My Title</title>
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
    <Layout><Header dataIndex={dataIndex.home} location={location} navbar={false}/>
    </Layout>
   
   </>
  )
}
export default Index

// export const query = graphql`
//   query IndexQuery {
//     home: datoCmsHomePage {
//       seoMetaTags {
//         ...GatsbyDatoCmsSeoMetaTags
//       }
//       title
//       subtitle
//       contents
//     }
//   }
// `