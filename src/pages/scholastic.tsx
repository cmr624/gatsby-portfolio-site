import React, { CSSProperties } from 'react';
import Layout from '../components/globalComponents/layout';
import CenteredTitle from '../components/layoutComponents/centeredTitle';
import { Container } from 'react-bootstrap';
import CarouselIndexItem from '../components/templates/gallery/carouselIndexItem';
import { ImageProps } from '../components/utils/dataTypes';

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
const Scholastic = () => (
  <Layout> 
    <CenteredTitle 
      h1Content="Scholastic"
      pContent="Since August 2019, I have been working as a game developer making educational games for Scholastic. Responsibilities include building and designing games from the ground up according to educational standards and requirements from the classroom magazines editorial team, building solutions for workflow and game performance deficiencies, and building out additional web content for the digital team."
    />
    <h2 style={textStyles}>Game Gallery Coming Soon!</h2>
    <p style={textStyles}>While I work on compiling the games I built, designed, and contributed to, please explore Scholastic's digital magazine portal for the magazine I primarily worked on, DynaMath <a href="https://dynamath.scholastic.com/pages/archives/game-archive.html?page=1">here</a>.</p>
  <Container>
    <h1>Gallery</h1>
    <CarouselIndexItem title="Picture of thing" 
    blurb="Caption of thing look at this long caption i think lorem ipusem etc" 
    images={images}/>
  </Container>
  </Layout>
)

export default Scholastic;
