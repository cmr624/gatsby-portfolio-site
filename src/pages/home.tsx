import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import '../pageStyles/home.css';
import QueryImage from '../components/globalComponents/image';

interface Props {
    name : string
}

const Home = () => {
  return(
  <>
    <div className="Home">
      <Container>
        <Row className="header-and-pic"> 
          <Col xs={12} md={7} className = "justHeader">
              <h1>Carlos Michael</h1>
              <div className="right-side">
                <h2>game producer @ nickelodeon</h2>
                <h2>working on early childhood educational games</h2>
                <h2>nyc</h2>
              </div>
          </Col>
          <Col xs={12} md={4}>
              <div className="container"> 
                <QueryImage queryImageName = "page-icon.png"/> 
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  </>);
};

export default Home;