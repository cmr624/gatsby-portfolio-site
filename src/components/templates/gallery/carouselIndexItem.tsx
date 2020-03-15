import { Carousel , Container} from 'react-bootstrap';
import React, { Component, useState } from 'react';
import { ImageProps } from '../../utils/dataTypes';
import QueryImage from '../../globalComponents/image';
import { GatsbyImageProps } from 'gatsby-image';
interface CarouselItemComponentProps {
    title : string;
    blurb : string;
    fileName : string;
}
const CarouselTitleComponent= (props : CarouselItemComponentProps) => {
    return(
        <Carousel.Item >
            <QueryImage queryImageName={props.fileName}/>
            <Carousel.Caption>
                <h3>{props.title}</h3>
                <p>{props.blurb}</p>
            </Carousel.Caption>
        </Carousel.Item>
    )
}
export interface CarouselIndexItemProps {
    title : string;
    blurb : string;
    images : Array<ImageProps>;
    callToActionButtonTitle?:string
    
}

const QueryImageStyle = {
    // height : 400,
    // width: 600,
    // margin:'auto'
    minHeight : 400,
}

function CarouselIndexItem (props : CarouselIndexItemProps){ 
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return(
    <Container >
        <Carousel  activeIndex={index} onSelect={handleSelect} interval={60000}> 
            {/* <CarouselTitleComponent title={props.title} blurb={props.blurb} fileName={props.images[0].fileName}/> */}
            <Carousel.Item style={{minHeight:"400px"}}>
                {/* <img src="https://dummyimage.com/600x400/000/fff" width={600} height={400}/> */}
                <QueryImage queryImageName={props.images[0].fileName} style={QueryImageStyle}/>
                <Carousel.Caption>
                    <h3>{props.title}</h3>
                    <p>{props.blurb}</p>
                </Carousel.Caption>
            </Carousel.Item>
            {
                props.images.map((image, index) => {
                    if (index === 0) return;
                    return (<Carousel.Item style={{minHeight:"400px"}}>
                        <QueryImage queryImageName={props.images[index].fileName} style={QueryImageStyle}/>
                    </Carousel.Item>); 
                })
            }

        </Carousel>
    </Container>
 )

}



export default CarouselIndexItem;
