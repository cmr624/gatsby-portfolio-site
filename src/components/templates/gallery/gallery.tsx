import React, { Component } from 'react';
import CarouselIndexItem, {CarouselIndexItemProps} from '../gallery/carouselIndexItem';
import {Row, Col, Container, InputGroup, FormControl} from 'react-bootstrap';
interface SearchBarProps {
    onChange : any;
}
const SearchBar = (props : SearchBarProps) => {
    return (
        <InputGroup className="mb-3" style={{fontFamily:"Avenir"}}>
            <InputGroup.Prepend>
            <InputGroup.Text id="inputGroup-sizing-default" >Search</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            onChange={props.onChange}
            />
        </InputGroup>
    );
}


interface GalleryProps {
    carouselProps : Array<CarouselIndexItemProps>;
}

interface GalleryState {
    currentItems : Array<CarouselIndexItemProps>;
    defaultItems : Array<CarouselIndexItemProps>;

}
export class Gallery extends Component {
    state : GalleryState;

    constructor(public props : GalleryProps){
        super(props)
        
        this.state = {
            currentItems : props.carouselProps,
            defaultItems : [...props.carouselProps],
        }
    }

    onChange = (e) => {
        if (e.target.value === "") {
            this.setState({currentItems : this.state.defaultItems});
        }
        else {
            let filtered = this.state.defaultItems.filter((item) => {
                let lc = item.title.toLowerCase();
                let filter = e.target.value.toLowerCase();
                return lc.includes(filter);
            });
            
            this.setState({currentItems : filtered});

        }
    }

    render() {
        const itemsToRender = this.state.currentItems.map((e, index) => {
            return (
                <Col xs={12} lg={4}>
                    <CarouselIndexItem title= {e.title} blurb = {e.blurb} images={e.images}/>
                </Col>
            )    
        });
        return (
            <Container>
                <SearchBar onChange={this.onChange}/>
                <Row>
                    {itemsToRender}
                </Row>
            </Container>        
        );
    }
}

export default Gallery;
