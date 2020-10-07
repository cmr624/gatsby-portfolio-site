import React from "react"

import Layout from "../components/globalComponents/layout"
import CenteredTitle from "../components/layoutComponents/centeredTitle"
import { Form, Button } from "react-bootstrap"

const Contact = () => {
 let formStyle= {"fontFamily":'Avenir', maxWidth:'550px', margin:'auto', padding:"15px"};
  
  return (
  <Layout>
      <CenteredTitle
      h1Content="Contact Me"
      pContent="Email me at carlosmichaeldev@gmail.com."
      />
  </Layout>
)}

export default Contact;
