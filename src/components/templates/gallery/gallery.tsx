import React, { Component } from 'react';
import CarouselIndexItem, {CarouselIndexItemProps} from '../gallery/carouselIndexItem';
import {Row, Col, Container, InputGroup, FormControl, CardGroup, Card} from 'react-bootstrap';
import QueryImage from '../../globalComponents/image';
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
        let allCards = this.state.currentItems.map((e, index) => {
            return (
                <Card style={{maxWidth:'300px', maxHeight : "500px", minWidth : "200px", padding:'10px'}}>
                    <QueryImage queryImageName={e.images[0].fileName}/>
                    <Card.Body>
                        <Card.Title>
                            {e.title}
                        </Card.Title>
                        <Card.Text>
                            {e.blurb}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )    
        });
        let itemsToRender = [];
        let three = [];
        allCards.forEach((e, i) => {
            if (i % 3 === 0) {
                itemsToRender.push(three);
                console.log('new array');
                three = [];
            }
            three.push(e);
        });

        itemsToRender = itemsToRender.map((e) => {
            console.log(e);
            return (<CardGroup style={{padding:'10px'}}>{e}</CardGroup>)
        });
    
        return (
            <Container>
                <SearchBar onChange={this.onChange}/>
                {itemsToRender}
            </Container>        
        );
    }
}

export default Gallery;
