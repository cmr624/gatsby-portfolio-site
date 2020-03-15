import React, { CSSProperties } from 'react';
import {Card} from 'react-bootstrap';

import './projectIndexCard.css';
import QueryImage from '../globalComponents/image';

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
    style?:CSSProperties;
}

const ProjectCard = (props : Props) => {
    let link;
    if (props.cardLink) {
        link = (<Card.Link href={props.cardLink.href}>{props.cardLink.displayName}</Card.Link>)
    }


    return (
        <Card>
            <QueryImage queryImageName={props.imageName} style={props.style}/>
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
