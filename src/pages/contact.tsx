import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import CenteredTitle from "../components/centeredTitle"
import { Form, Button } from "react-bootstrap"

const Contact = () => {
 let formStyle= {"fontFamily":'Avenir', maxWidth:'550px', margin:'auto', padding:"15px"}
  
  return (
  <Layout>
      <CenteredTitle
      h1Content="Contact Me"
      pContent="Please fill out the form below! If you don't hear back from me, feel free to email me at cm@nyu.edu!"
      />
      <Form style={formStyle}  method="post" netlify-honeypot="bot-field" data-netlify="true">
       <input type="hidden" name="bot-field" />
          <Form.Group controlId = "formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder = "Enter email"/>
          </Form.Group>
          <Form.Group controlId="formTextArea">
            <Form.Label>Reason for contact</Form.Label>
            <Form.Control as="textarea" rows="3" />
        </Form.Group>
        <Button variant="primary" type="submit">
            Submit
        </Button>
        <Form.Text className="text-muted">
        Form submitted using Netlify's built in form setup. Please read about it <a href="https://docs.netlify.com/forms/setup/#html-forms">here.</a>
        </Form.Text>
      </Form>
  </Layout>
)}

export default Contact;
