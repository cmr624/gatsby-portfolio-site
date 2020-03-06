import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import '../pageStyles/home.css';
import Image from '../components/image';
interface Props {
    name : string
}

export default class Home extends React.Component {
    constructor(public props : Props)
    {
        super(props);   
    }

    render(){
        return <div className="Home">
        <Container>
  
            <Row className="header-and-pic">
              <Col xs={12} md={7} className = "justHeader">
                  <h1>Carlos Michael</h1>
                  <div className="right-side">
                    <h2>NYU 19</h2>
                    <h2>Web Developer</h2>
                    <h2>Game Developer</h2>
                    <h2></h2>
                  </div>
              </Col>
              <Col xs={12} md={5}>
                  <div className="container">
                    <Image/>
                  </div>
              </Col>
            </Row>
          </Container>
          <div className="container bottom-blurb">
            <p>Adaptive, organized, and motivated web developer looking for opportunities for growth. NYU Courant Institute Computer Science graduate, interested in expanding development skills in project organization and management, collaboration, and staying current with modern tools and best practices.</p>
        </div>
        </div>
    }

}

