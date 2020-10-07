import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';
import '../pageStyles/home.css';
import QueryImage from '../components/globalComponents/image';

interface Props {
    name : string
}

//TODO : change from class - doesn't use state
export default class Home extends React.Component {
    constructor(public props : Props)
    {
        super(props);   
    }
    componentDidMount(){

    }
    render(){
        return <div className="Home">
        <Container>
  
            <Row className="header-and-pic">
              <Col xs={12} md={7} className = "justHeader">
                  <h1>Carlos Michael</h1>
                  <div className="right-side">
                    <h2>game producer @ noggin</h2>
                    <h2>game developer</h2>
                    <h2>nyc</h2>
                  </div>
              </Col>
              <Col xs={12} md={4}>
                  <a className="container" 
                    href="https://www.justice.gov/storage/report.pdf">
                    <QueryImage queryImageName = "page-icon.png"/> 
                  </a>
              </Col>
            </Row>
          </Container>
        </div>
    }

}

