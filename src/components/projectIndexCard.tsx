import React from 'react';
import {Card} from 'react-bootstrap';

import './projectIndexCard.css';
import QueryImage from './image';

interface Link {
    displayName : string;
    href : string;
}

interface Props {
    title : string;
    blurb : string;
    imageName : string;
    mutedText : string;
    cardLink? : Link;
}

const ProjectCard = (props : Props) => {
    let link;
    if (props.cardLink) {
        link = (<Card.Link href={props.cardLink.href}>{props.cardLink.displayName}</Card.Link>)
    }


    return (
        <Card>
            {/* <Card.Img variant="top" src={props.imagePath} /> */}
            <QueryImage queryImageName={props.imageName}/>
            <Card.Body>
                <Card.Title className="title">{props.title}</Card.Title>
            <Card.Text>
                {props.blurb}
            </Card.Text>
            {link}
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">{props.mutedText}</small>
            </Card.Footer>
        </Card>
    );
}

export default ProjectCard;
