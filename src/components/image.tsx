import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-QueryImage` to automatically serve optimized
 * QueryImages with lazy loading and reduced file sizes. The QueryImage is loaded using a
 * `useStaticQuery`, which allows us to load the QueryImage from directly within this
 * component, rather than having to pass the QueryImage data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-QueryImage`: https://gatsby.dev/gatsby-QueryImage
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
interface QueryImageProps {
  queryImageName : string;
}

const QueryImage = (props : QueryImageProps) => {
  const allQueryImageData = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            id
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `);
  let array = allQueryImageData.allImageSharp.edges;
  let node = array.find(nodes => nodes.node.fluid.originalName === props.queryImageName);

  return <Img fluid={node.node.fluid}/>
}



export default QueryImage;
