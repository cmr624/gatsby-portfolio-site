import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/globalComponents/layout"
import CenteredTitle from "../components/layoutComponents/centeredTitle"
const NYU = () => (
  <Layout>
     <CenteredTitle
      h1Content="NYU Computer Science"
      pContent="NYU CS has given me a solid technical foundation in data structures and algorithms, but my two minors in Game Design and Web Development helped me apply that knowledge to build high quality games, web apps, and other digital experiences."
     /> 
   <Container>
      <h2 style={{fontFamily:"Avenir", textAlign:'center', paddingTop:"20px"}}>NYU Courses and Projects Gallery coming soon.</h2>
      <p style={{fontFamily:"Avenir", textAlign:'center'}}>While I work on building the gallery component, please check out my GitHub profile <a href="https://github.com/cmr624">here</a> for some of the projects I worked on in undergrad.</p>
   </Container>
  </Layout>
)

export default NYU;
