import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Container} from 'react-bootstrap';
import { Link } from "gatsby";
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container className="mx auto" style={{textAlign:"center", fontFamily:"Avenir"}}>
      <h1>404 Not Found!</h1>
      <p>Hmm... this path doesn't exist on the website... yet! If this is a bug, please let me know what you were trying to access! Send me a message <Link to= "/contact">here</Link>.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
