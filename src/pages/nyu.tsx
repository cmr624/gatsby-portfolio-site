import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/globalComponents/layout"
import CenteredTitle from "../components/layoutComponents/centeredTitle"
import {useStaticQuery, graphql} from 'gatsby';
import { fixNodes } from "../components/query/personalPageQuery";
import Gallery, { GalleryItemProps } from "../components/templates/gallery/gallery";
import { Link } from "../components/utils/dataTypes";

interface NYUItemProps {
  name : string,
  blurb : string,
  course : string,
  semester : string,
  links : any,
  images : any,
}



const NYU = () => {
    const queryData = useStaticQuery(graphql`
    {
      allNyuJson {
        edges {
          node {
            name
            blurb
            course
            semester
            links {
              link
            }
            images
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
  let nyu = fixNodes(queryData.allNyuJson.edges);
  let images = fixNodes(queryData.allImageSharp.edges);
  let props : Array<GalleryItemProps> = [];
  nyu.forEach((e : NYUItemProps) => {
    props.push({
      title:e.name,
      blurb:e.blurb,
      semester:e.semester,
      course:e.course,
      callToActionButtonTitle:"More Info",
      ctaURL:e.links[0].link,
      images:[{fluid:images.find(x => x.fluid.originalName === e.images[0]).fluid, altText:e.name}]
    })
  })
  return (
  <Layout>
     <CenteredTitle
      h1Content="NYU Computer Science"
      pContent="NYU CS has given me a solid technical foundation in data structures and algorithms, but my two minors in Game Design and Web Development helped me apply that knowledge to build high quality games, web apps, and other digital experiences."
     /> 
   <Container>
      <h2 style={{fontFamily:"Avenir", textAlign:'center', paddingTop:"20px"}}>NYU Projects Gallery</h2>
      <Gallery
      allGalleryItemProps={props}
      />
   </Container>
  </Layout>
)}

export default NYU;
