import React from "react"
import { useStaticQuery, graphql } from "gatsby"
export const useSiteAboutdata = () =>{
    const query = useStaticQuery(
        graphql`
query AboutQuery {
  about: datoCmsAboutPage {
    id
    header{
      id
      titleText
      titleSubtext
      buttonsLinks
      logo{
        fluid {
            ...GatsbyDatoCmsFluid
          }
      }
    }
    midcontent{
      id
      titleText1
      titleText2
      titleText3
      titleText4
      titleText5
      titleText6
      titleSubtext1
      bulletedList
      titleSubtext3
      titleSubtext4
      titleSubtext5
      titleSubtext6
      titleText2
    }
  }
}
`
    )
    return query
}
