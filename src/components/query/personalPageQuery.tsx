import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Gallery , {GalleryItemProps} from "../templates/gallery/gallery";

const PersonalPageQuery = () => {
  const data = useStaticQuery(graphql`
    {
      allGamesJson {
        edges {
          node {
            name
            school
            slug
            blurb
            images
          }
        }
      }
      allWebdevJson {
        edges {
          node {
            name
            slug
            blurb
            imgLink
            links {
              link
            }
          }
        }
      }
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
  let images = mutateNodes(data.allImageSharp.edges);
  


  let games = data.allGamesJson.edges;
  let gameProps = createGameCards(games, images);

  let web = data.allWebdevJson.edges;
  let webCards : Array<GalleryItemProps> = createWebCards(web, images);

  let allProps = [];
  webCards.forEach((e) => {allProps.push(e)});
  gameProps.forEach((e) => {allProps.push(e)});
  return (<Gallery allGalleryItemProps={allProps}/>);
}

function createGameCards(rawQueryData, images : Array<any>){
  let data = mutateNodes(rawQueryData);
  let galleryItemProps : Array<GalleryItemProps> = [];
  data.forEach((e) => {
    if (e.school === null){
      console.log(e);
      galleryItemProps.push({
        title:e.name,
        blurb:e.blurb,
        images:[{fluid:images.find(x => x.fluid.originalName === e.images[0]).fluid, altText:e.images[0]}]
      })
    }
  })
  return galleryItemProps;
}

function createWebCards(rawQueryData, images: Array<any>){
  let data = mutateNodes(rawQueryData);
  let galleryItemProps : Array<GalleryItemProps>= [];
  data.forEach((e) => {
    if (e.name === "Clarify") {
      let imageFluid = images.find(e => e.fluid.originalName === "clarifyPrev.png");
      galleryItemProps.push({title : e.name, blurb:e.blurb, images:[{ fluid:imageFluid.fluid, altText:"Clarify"}]});
    }
  })

  return (galleryItemProps);
}


function mutateNodes(rawQueryData): Array<any>{
  let arr = [];
  rawQueryData.forEach((e) => {
    arr.push(e.node);
  });
  return arr;

}
export default PersonalPageQuery;
