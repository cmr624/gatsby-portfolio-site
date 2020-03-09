import React, { CSSProperties } from 'react';
import Layout from '../components/globalComponents/layout';
import CenteredTitle from '../components/layoutComponents/centeredTitle';
import { Container } from 'react-bootstrap';
import CarouselIndexItem, { CarouselIndexItemProps } from '../components/templates/gallery/carouselIndexItem';
import { ImageProps } from '../components/utils/dataTypes';
import Gallery from '../components/templates/gallery/gallery';
import { graphql, useStaticQuery } from 'gatsby';

const textStyles : CSSProperties = {
  fontFamily : "Avenir",
  textAlign:"center"
}

const images = [{
  fileName : 'spaceVR.png', 
  altText:'gatsby astronaut'
},{
  fileName : 'kirby.png', 
  altText:'gatsby stack'},
  {fileName : 'meIRL.jpg', altText:"meIRL"}
];

let carouselProps : Array<CarouselIndexItemProps> = [
  {
    title:" Title one",
    blurb: "im the one",
    images : images,
  },
  {
    title:"Title two",
    blurb : "i'm two",
    images : images,
  },
  {
    title : "Title three",
    blurb:"i'm number 3",
    images : images,
  }
] 



const Scholastic = () => {
 const gamesGalleryQuery = useStaticQuery(graphql`
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
  gamesGalleryQuery.allGamesJson.edges.forEach((nodeObj, i) => {
    //console.log(nodeObj.node.name);
    // console.log(nodeObj)
    nodeObj.node.images = nodeObj.node.images.map((e) => {return {fileName : e, altText : "alternateText"}})
    carouselProps.push({title:nodeObj.node.name, blurb:nodeObj.node.blurb, images:nodeObj.node.images})
    console.log(nodeObj.node.images);
  });
  return (
  <Layout> 
    <CenteredTitle 
      h1Content="Scholastic"
      pContent="Since August 2019, I have been working as a game developer making educational games for Scholastic. Responsibilities include building and designing games from the ground up according to educational standards and requirements from the classroom magazines editorial team, building solutions for workflow and game performance deficiencies, and building out additional web content for the digital team."
    />
    <h2 style={textStyles}>Game Gallery Coming Soon!</h2>
    <p style={textStyles}>While I work on compiling the games I built, designed, and contributed to, please explore Scholastic's digital magazine portal for the magazine I primarily worked on, DynaMath <a href="https://dynamath.scholastic.com/pages/archives/game-archive.html?page=1">here</a>.</p>
  <Container>
    <h1>Gallery</h1>
    <Gallery carouselProps={carouselProps}/>
  </Container>
  </Layout>
)}

export default Scholastic;
