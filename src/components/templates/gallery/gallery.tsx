import React, { Component } from 'react';
import CarouselIndexItem, {CarouselIndexItemProps} from '../gallery/carouselIndexItem';
import {Row, Col, Container} from 'react-bootstrap';
interface GalleryProps {
    carouselProps : Array<CarouselIndexItemProps>;
}
export class Gallery extends Component {
    constructor(public props : GalleryProps){
        super(props)
        
        this.state = {
            currentItems : props.carouselProps,
            defaultItems : [...props.carouselProps],
        }
    }



    render() {
        //@ts-ignore
        const itemsToRender = this.state.currentItems.map((e, index) => {
            return (
                <Col xs={12} lg={4}>
                    <CarouselIndexItem title= {this.props.carouselProps[index].title} blurb = {this.props.carouselProps[index].blurb} images={this.props.carouselProps[index].images}/>
                </Col>
            )    
        });
        return (
            <Container>
                <Row>
                    {itemsToRender}
                </Row>
            </Container>        
        );
    }
}

export default Gallery;
