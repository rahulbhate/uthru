import { useStaticQuery, graphql } from "gatsby"
export const useSiteIndexdata = () =>{
    const query = useStaticQuery(
        graphql`
        query IndexQuery {
        home: datoCmsHomePage {
            id
            header {
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
        }
        }
    `
    )
    return query
}
