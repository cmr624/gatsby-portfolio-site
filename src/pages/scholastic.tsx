import React, { CSSProperties } from 'react';
import Layout from '../components/globalComponents/layout';
import CenteredTitle from '../components/layoutComponents/centeredTitle';
import { Container } from 'react-bootstrap';
import CarouselIndexItem, { CarouselIndexItemProps } from '../components/templates/gallery/carouselIndexItem';
import { ImageProps } from '../components/utils/dataTypes';
import Gallery, { GalleryItemProps } from '../components/templates/gallery/gallery';
import {fixNodes} from '../components/query/personalPageQuery';
import { graphql, useStaticQuery } from 'gatsby';


const textStyles : CSSProperties = {
  fontFamily : "Avenir",
  textAlign:"center"
}

interface ScholasticGameProps {
  name : string;
  blurb : string;
  image : any;
}
const Scholastic = () => {  
   const queryData = useStaticQuery(graphql`
    {
      allScholasticJson {
        edges {
          node {
            name
            image
            blurb
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
  let data : Array<ScholasticGameProps> = fixNodes(queryData.allScholasticJson.edges);
  let images = fixNodes(queryData.allImageSharp.edges);
  let props : Array<GalleryItemProps> = [];
  data.forEach((e) => {
    let img = images.find(x => x.fluid.originalName === e.image);
    props.push({
      title:e.name,
      blurb:e.blurb,
      images:[{fluid:img.fluid, altText:e.name}]
    })
  })
  
  return (
  <Layout> 
    <CenteredTitle 
      h1Content="Scholastic"
      pContent="Since August 2019, I have been working as a game developer making educational games for Scholastic. Responsibilities include building and designing games from the ground up according to educational standards and requirements from the classroom magazines editorial team, building solutions for workflow and game performance issues, and building out additional web content for the digital team."
    />
  <Container>
  <Gallery
    allGalleryItemProps={props}
  />
  </Container>
  </Layout>
)}

export default Scholastic;
