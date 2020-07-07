import { useStaticQuery, graphql } from "gatsby"
export const useSiteFooterdata = () =>{
    const query = useStaticQuery(
        graphql`
query FooterQuery {
  footer: datoCmsFooter {
    id
    footerContent{
        titleText
        mailText
        backToTopText
        footerLinksCopyright
        logoFooter{
            fluid {
                ...GatsbyDatoCmsFluid
              }
        }
      }
  }
}
`
    )
    return query
}
