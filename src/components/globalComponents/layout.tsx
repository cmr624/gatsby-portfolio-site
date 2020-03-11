/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../layoutComponents/header"
import "./layout.css"
import { Container } from "react-bootstrap"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      dataJson {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.dataJson.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Container className="mx auto">
        <footer style={{textAlign:'center', fontFamily:"Avenir", fontWeight:"bold"}}>
        Programmed by Carlos-Michael <br/>with Gatsby.js, GraphQL, React, and Typescript.
        <br/> Find the repository <a href="https://github.com/cmr624/gatsby-portfolio-site">here!</a>
        </footer>
        </Container>
        
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
