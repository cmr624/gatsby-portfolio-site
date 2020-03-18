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


const Scholastic = () => {
  return (
  <Layout> 
    <CenteredTitle 
      h1Content="Scholastic"
      pContent="Since August 2019, I have been working as a game developer making educational games for Scholastic. Responsibilities include building and designing games from the ground up according to educational standards and requirements from the classroom magazines editorial team, building solutions for workflow and game performance deficiencies, and building out additional web content for the digital team."
    />
    <h2 style={textStyles}>Game Gallery Coming Soon</h2>
  <Container>
  </Container>
  </Layout>
)}

export default Scholastic;
