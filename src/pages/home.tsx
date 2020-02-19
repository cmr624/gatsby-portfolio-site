import React from 'react';
import { Row, Col, Container} from 'react-bootstrap';

interface Props {
    name : string
}

export default class Home extends React.Component {
    constructor(public props : Props)
    {
        super(props);
    }

    render(){
        return (
            <Row>
                <Col xs={12} md={7}>
                    {this.props.name} Left
                </Col>
                <Col xs={12} md={5}>
                    Right
                </Col>
            </Row>
        )
    }

}