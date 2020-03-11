import {useStaticQuery, graphql, GatsbyGraphQLType} from 'gatsby';
export const allGamesQuery : GatsbyGraphQLType = useStaticQuery(graphql`
  {
    allGamesJson {
      edges {
        node {
          name
          images
          blurb
        }
      }
    }
  }
`);

/**  gamesGalleryQuery.allGamesJson.edges.forEach((nodeObj, i) => {
    nodeObj.node.images = nodeObj.node.images.map((e) => {return {fileName : e, altText : "alternateText"}})
    carouselProps.push({title:nodeObj.node.name, blurb:nodeObj.node.blurb, images:nodeObj.node.images});
  }); */
