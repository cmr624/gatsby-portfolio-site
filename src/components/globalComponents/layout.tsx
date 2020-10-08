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
      },
      allDataJson {
        edges {
          node {
            arr
          }
        }
      }
    }
  `);    
  
  let arr = data.allDataJson.edges[1].node.arr;
  let e : string;
  if (arr !== null) {
    e = arr[getRandomIntInclusive(0, arr.length - 1)];
  }

  return (
    <>
      <Header siteTitle="CM"/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Container className="mx auto">
        <footer style={{textAlign:'center', fontFamily:"Avenir", fontWeight:"bold", maxWidth:'300px', margin:'auto'}}>
        { 
          e.split(' ').map((ele, i) => {
            if (ele.indexOf('\n') >= 0){
              return (<>{ele}<br></br></>)
            }
            else {
              return ele + " ";
            }
          })
        } 
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

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive 
}