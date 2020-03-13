import React, { Component } from 'react';
import CarouselIndexItem, {CarouselIndexItemProps} from '../gallery/carouselIndexItem';
import {Row, Col, Container, InputGroup, FormControl, CardGroup, Card} from 'react-bootstrap';
import QueryImage from '../../globalComponents/image';
import { ImageProps } from '../../utils/dataTypes';

import { FaSortButton, FaToggleButtonGroup, IconProps } from '../../layoutComponents/fa-icons';


// write const that has icon jsx and alternate text (string version of skill / technology) ie icon : <GitHub/> , name : "GitHub"



interface SortBarProps {
     
}

/**
 * 
 * @param props array of icons to display
 */
const SortBar = (props : SortBarProps) => {
    let array = new Array<IconProps>();
    array.push({faIconName:"react",skillString:"react"});
    return(
        <Container>
            <FaToggleButtonGroup arrayIconProps={array}/>
        </Container>
    )
}

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
    allGalleryItemProps: Array<GalleryItemProps>;
}

//gallery item props
interface GalleryItemProps {
    title : string;
    blurb : string;
    images : Array<ImageProps>;
    callToActionButtonTitle?:string
}

//gallery state
interface GalleryState {
    currentItems : Array<CarouselIndexItemProps>;
    defaultItems : Array<CarouselIndexItemProps>;
}

/**
 * @class Gallery
 * @classdesc A searchable gallery component, searchable by title 
 */
export class Gallery extends Component {
    state : GalleryState;

    constructor(public props : GalleryProps){
        super(props)
        this.state = {
            currentItems : props.allGalleryItemProps,
            defaultItems : [...props.allGalleryItemProps],
        }
    }

    //on change for search bar, searchable by title
    onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
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
   
    /**
     * Converts the array to an array of card group items with 3 or less cards in it
     * @param array Array of React Bootstrap Cards
     * @returns {array} array of JSX React <CardGroups> with 3 or less cards in it
     */
    cardsToCardGroup(array, numberPerCardGroup){
        let returnArray = [];   
        // the length of the card array divided by 3 is the number of card groups we need
        // initialize card groups and pass in 3 at a time to the arrays
        let numberOfGroups = Math.ceil(array.length / 3);

        function formula(numberPerCardGroup, currentIndexInArray, currentIndexInLoop) : number{
            return (numberPerCardGroup * currentIndexInArray) + currentIndexInLoop;
        }

        for (let currentIndexInArray = 0; currentIndexInArray < numberOfGroups; currentIndexInArray++) {
            let arrayOfCards = [];
            for (let currentIndexInLoop = 0; currentIndexInLoop < numberPerCardGroup; currentIndexInLoop++) {
                 arrayOfCards.push(array[formula(numberPerCardGroup, currentIndexInArray, currentIndexInLoop)]);
            }
            returnArray.push(
                <CardGroup>
                    {arrayOfCards}
                </CardGroup>
            );
        } 
        return returnArray;
    }


    render() {
        let allCards = this.state.currentItems.map((e : CarouselIndexItemProps) => {
            return (
                <Card style={{maxWidth:'300px', maxHeight : "500px",minHeight:"200px", minWidth : "200px", padding:'10px'}}>
                    <Container style={{width: '100%', height:'auto', objectFit:'contain', verticalAlign:'middle'}}>
                        <QueryImage queryImageName={e.images[0].fileName} style={{height : 'auto', width:'100%', objectFit:"contain", verticalAlign:'middle'}}/>
                    </Container>
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
       let cardGroups =  this.cardsToCardGroup(allCards, 3);

        return (
            <Container>
                <SearchBar onChange={this.onChange}/>
                <CardGroup >
                {cardGroups}
                </CardGroup>
            </Container>        
        );
    }
}

export default Gallery;

/**
 * <Card.Footer style={{verticalAlign:'bottom'}}>
 *    <small className="text-muted">Credits </small>
 * </Card.Footer>
*/