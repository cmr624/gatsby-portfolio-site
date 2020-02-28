import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container} from 'react-bootstrap';
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="mx auto" style={{textAlign:"center", fontFamily:"Avenir"}}>
      <h1>Nooooooo!!!!</h1>
      <p>I promise... I'm workin on it! Check back soon... hopefully within the next week!</p>
    </Container>
  </Layout>
)

export default NotFoundPage
